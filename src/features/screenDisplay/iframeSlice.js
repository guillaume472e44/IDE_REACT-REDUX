import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { emptyProject } from "../codeInput/codeInputSlice";

const iframeSlice = createSlice({
  name: "iframe",
  initialState,
  reducers: {
    updateIframe: (state, action) => {
      state.iframeStyle = action.payload.codeCSS;
      state.iframeBody = action.payload.codeHTML;
      state.iframeScript = action.payload.codeJS;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(emptyProject, (state) => {
      return { ...initialState };
    });
  },
});

export const { updateIframe } = iframeSlice.actions;
export default iframeSlice.reducer;
