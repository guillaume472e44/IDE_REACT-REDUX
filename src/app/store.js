import { configureStore } from "@reduxjs/toolkit";
import codeInputSlice from "../features/codeInput/codeInputSlice";
import iframeSlice from "../features/screenDisplay/iframeSlice";

export const store = configureStore({
  reducer: {
    codeInputSlice,
    iframeSlice,
  },
});
