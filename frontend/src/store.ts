import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: null,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
