//all methods for authentication

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DisplayUser } from "./models/DisplayUser.interface";
import { Jwt } from "./models/Jwt";
import { NewUser } from "./models/Newuser";
import axios from "axios";
import authService from "./services/auth.service";

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
  user: null,
  jwt: null,
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
      });
  },
});

export default authSlice.reducer;
