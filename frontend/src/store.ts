//global store for redux

import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import { useDispatch } from "react-redux";
import { authSlice } from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
