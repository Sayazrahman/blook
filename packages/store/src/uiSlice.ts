import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
  // Export the interface
  loading: boolean;
  theme: "light" | "dark";
  sidebarOpen: boolean;
}

const initialState: UIState = {
  loading: false,
  theme: "light",
  sidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { setLoading, setTheme, toggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;
