import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import JSCodeInput from "../features/jsCodeInput/JSCodeInput";
import { applySyntaxHighlighting } from "./utils/applySyntaxHighlighting";

export default function CodeEditor() {
  const coloredInput = useRef(null);
  const code = useSelector((state) => state.jsCodeInputSlice.code);

  function getlineNumber(code) {
    let linesNumber = code.match(/\n/g)?.length
      ? code.match(/\n/g).length + 1
      : 1;

    let rows = [];

    for (let i = 0; i < linesNumber; i++) {
      rows.push(<span key={i}>{i + 1}</span>);
    }

    return rows;
  }

  useEffect(() => {
    if (coloredInput.current) {
      coloredInput.current.innerHTML = applySyntaxHighlighting(code);
    }
  }, [code]);

  return (
    <div className="code-editor">
      <div className="lineNumbers">{getlineNumber(code)}</div>
      <div className="lineCode-container">
        <div className="lineCode--displayer" ref={coloredInput}></div>
        <JSCodeInput />
      </div>
    </div>
  );
}
