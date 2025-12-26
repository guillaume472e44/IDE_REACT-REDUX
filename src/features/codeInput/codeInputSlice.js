import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codeJS: `// JavaScript File`,
  codeCSS: `/* CSS File */`,
  codeHTML: `<!-- HTML File -->
<!-- No need !doctype, html and head tags. -->`,
  currentCode: "codeHTML",
};

const codeInputSlice = createSlice({
  name: "code_input",
  initialState,
  reducers: {
    updateCode: (state, action) => {
      state[action.payload.current] = action.payload.content;
    },
    setCurrent: (state, action) => {
      state.currentCode = action.payload;
    },
    emptyProject: (state, action) => {
      return { ...initialState };
    },
  },
});

export const { updateCode, setCurrent, emptyProject } = codeInputSlice.actions;
export default codeInputSlice.reducer;
