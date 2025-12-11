import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codeJS: ``,
  codeCSS: ``,
  codeHTML: ``,
  currentCode: "codeJS",
  numberOfLine: 1,
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
    setNumberOfLine: (state, action) => {},
  },
});

export const { updateCode, setCurrent } = codeInputSlice.actions;
export default codeInputSlice.reducer;
