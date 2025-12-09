import { configureStore } from "@reduxjs/toolkit";
import jsCodeInputSlice from "../features/jsCodeInput/jsCodeInputSlice";

export const store = configureStore({
  reducer: {
    jsCodeInputSlice,
  },
});
