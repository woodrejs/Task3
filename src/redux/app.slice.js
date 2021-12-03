import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggleTheme(state, action) {
      const theme = action.payload;

      if (theme !== "dark" && theme !== "light") return;

      state.theme = theme;
    },
  },
});

export const { toggleTheme } = appSlice.actions;
export default appSlice.reducer;
