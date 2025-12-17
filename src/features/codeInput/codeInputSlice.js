import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codeJS: `// Fichier JavaScript`,
  codeCSS: `/* Fichier CSS */`,
  codeHTML: `<!-- Fichier HTML -->
<span>457</span>
<div class="rfrf"></div>
<a id="proutiprouta" class="ma-class">
<p>texte</p>`,
  currentCode: "codeJS",
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
  },
});

export const { updateCode, setCurrent } = codeInputSlice.actions;
export default codeInputSlice.reducer;
