//all methods for authentication

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DisplayUser } from "./models/DisplayUser.interface";
import { Jwt } from "./models/Jwt";
import { NewUser } from "./models/Newuser";
import axios from "axios";
import authService from "./services/auth.service";
import { RootState } from "../../store";
import { LoginUser } from "./models/LoginUser.interface";

const storedUser: string | null = localStorage.getItem("user");

const user: DisplayUser | null = storedUser ? JSON.parse(storedUser) : null;

const storedJwt: string | null = localStorage.getItem("jwt");

const jwt: Jwt | null = storedJwt ? JSON.parse(storedJwt) : null;

// TODO: move higher
interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface AuthState extends AsyncState {
  user?: DisplayUser | null;
  jwt?: Jwt | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: user,
  jwt: jwt,
  isLoading: false,
  isSuccess: false,
  isError: false,
  isAuthenticated: false,
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser: NewUser, thunkAPI) => {
    try {
      return await authService.register(newUser);
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to register user");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (loginUser: LoginUser, thunkAPI) => {
    try {
      return await authService.login(loginUser);
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to login user");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await authService.logout();
  } catch (error) {
    console.log(error);
  }
});

export const verifyJwt = createAsyncThunk(
  "auth/verifyJwt",
  async (jwt: string, thunkAPI) => {
    try {
      return await authService.verifyJwt(jwt);
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to verify jwt");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // for register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      // for login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.jwt = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.isAuthenticated = false;
      })
      // for logout
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.jwt = null;
        state.user = null;
        state.isAuthenticated = false;
      })
      // for verifyJwt
      .addCase(verifyJwt.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyJwt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = action.payload;
      })
      .addCase(verifyJwt.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;

export const selectedUser = (state: RootState) => {
  return state.auth.user;
};

export const { reset } = authSlice.actions;
