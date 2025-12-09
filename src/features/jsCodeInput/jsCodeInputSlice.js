import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jsLinesCode: [" "],
};

const jsCodeInputSlice = createSlice({
  name: "code_input",
  initialState,
  reducers: {
    setLines: (state, action) => {
      state.jsLinesCode[action.payload.index] = action.payload.text;
      state.jsLinesCode.forEach((line, index) => {
        line.length === 0 && state.jsLinesCode.splice(index, 1);
      });
    },
    addLine: (state, action) => {
      state.jsLinesCode.push(" ");
    },
  },
});

export const { setLines, addLine } = jsCodeInputSlice.actions;
export default jsCodeInputSlice.reducer;
