import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});

import type { AuthState } from "./authSlice";
import type { UIState } from "./uiSlice";

export type RootState = {
  auth: AuthState;
  ui: UIState;
};
export type AppDispatch = typeof store.dispatch;
