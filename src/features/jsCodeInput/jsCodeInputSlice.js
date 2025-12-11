import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: ``,
};

const jsCodeInputSlice = createSlice({
  name: "code_input",
  initialState,
  reducers: {
    updateCode: (state, action) => {
      state.code = action.payload;
    },
  },
});

export const { updateCode } = jsCodeInputSlice.actions;
export default jsCodeInputSlice.reducer;
