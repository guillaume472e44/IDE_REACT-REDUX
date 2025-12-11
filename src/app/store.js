import { configureStore } from "@reduxjs/toolkit";
import codeInputSlice from "../features/codeInput/codeInputSlice";

export const store = configureStore({
  reducer: {
    codeInputSlice,
  },
});
