import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CodeInput from "../features/codeInput/CodeInput";
import LinesNumber from "./components/LinesNumber";
import { applySyntaxHighlighting } from "./utils/applySyntaxHighlighting";

export default function CodeEditor() {
  const [width, setWidth] = useState(null);
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
    setWidth(coloredInput.current.clientWidth);
  }, [code, codeParams.currentCode]);

  return (
    <div className="code-editor">
      <LinesNumber code={code} maxCharWidth={Math.trunc((width - 16) / 9.6)} />
      <div className="lineCode-container">
        <div className="lineCode--displayer" ref={coloredInput}></div>
        <CodeInput />
      </div>
    </div>
  );
}
