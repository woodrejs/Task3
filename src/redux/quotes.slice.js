import { createSlice } from "@reduxjs/toolkit";
import { getRndInteger } from "../utils/functions";

const quotesSlice = createSlice({
  name: "quotesSlice",
  initialState: {
    list: [],
    displayed: [],
    single: null,
  },
  reducers: {
    setList(state, action) {
      const list = action.payload;
      state.list = list;

      const index = getRndInteger(0, list.length);
      const single = list[index];
      state.displayed.push(single);
      state.single = single;
    },
    addSingle(state, action) {
      const single = action.payload;
      state.displayed.push(single);
      state.single = single;
    },
  },
});

export const { setList, addSingle } = quotesSlice.actions;
export default quotesSlice.reducer;
