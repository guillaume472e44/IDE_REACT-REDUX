import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import CodeInput from "../features/codeInput/CodeInput";
import LinesNumber from "./components/LinesNumber";
import { applySyntaxHighlighting } from "./utils/applySyntaxHighlighting";

export default function CodeEditor() {
  const coloredInput = useRef(null);
  const codeParams = useSelector((state) => state.codeInputSlice);
  const code = codeParams[codeParams.currentCode];

  useEffect(() => {
    if (coloredInput.current) {
      coloredInput.current.innerHTML = applySyntaxHighlighting({
        code,
        lang: codeParams.currentCode,
      });
    }
    console.log(coloredInput.current);
  }, [code, codeParams.currentCode]);

  return (
    <div className="code-editor">
      <LinesNumber code={code} />
      <div className="lineCode-container">
        <div className="lineCode--displayer" ref={coloredInput}></div>
        <CodeInput />
      </div>
    </div>
  );
}
