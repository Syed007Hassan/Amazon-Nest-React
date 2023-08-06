//all methods for authentication

import { createSlice } from "@reduxjs/toolkit";

// TODO: move higher
interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface AuthState extends AsyncState {
  token: string;
  userId: string;
  isLoggedIn: boolean;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    userId: "",
    isLoggedIn: false,
  },
});
