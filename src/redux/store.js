import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app.slice";
import quotesSlice from "./quotes.slice";
import errorSlice from "./error.slice";

export default configureStore({
  reducer: {
    appSlice: appSlice,
    quotesSlice: quotesSlice,
    errorSlice: errorSlice,
  },
});
