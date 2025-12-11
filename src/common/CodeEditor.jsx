import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import JSCodeInput from "../features/jsCodeInput/JSCodeInput";
import LinesNumber from "./components/LinesNumber";
import { applySyntaxHighlighting } from "./utils/applySyntaxHighlighting";

export default function CodeEditor() {
  const coloredInput = useRef(null);
  const code = useSelector((state) => state.jsCodeInputSlice.code);

  useEffect(() => {
    if (coloredInput.current) {
      coloredInput.current.innerHTML = applySyntaxHighlighting(code);
    }
  }, [code]);

  return (
    <div className="code-editor">
      <LinesNumber code={code} />
      <div className="lineCode-container">
        <div className="lineCode--displayer" ref={coloredInput}></div>
        <JSCodeInput />
      </div>
    </div>
  );
}
