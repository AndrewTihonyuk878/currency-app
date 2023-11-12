import { configureStore } from "@reduxjs/toolkit";
import { currReducer } from "./currencySlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    currency: currReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
