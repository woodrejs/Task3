import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "errorSlice",
  initialState: {
    message: null,
    isOpen: false,
  },
  reducers: {
    setError(state, action) {
      state.message = action.payload;
      state.isOpen = true;
    },
    closeError(state, action) {
      state.isOpen = false;
    },
  },
});

export const { setError, closeError } = errorSlice.actions;
export default errorSlice.reducer;
