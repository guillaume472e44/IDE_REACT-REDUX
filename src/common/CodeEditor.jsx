import { useSelector } from "react-redux";
import JSCodeInput from "../features/jsCodeInput/JSCodeInput";

export default function CodeEditor() {
  const lines = useSelector((state) => state.jsCodeInputSlice.jsLinesCode);

  function wordColorFormat(line) {
    // const regexConservation = /[^\s.,!?;:()"'«»\-–—]+|[.,!?;:()"'«»\-–—]/g;
    const regexSplit = /[^\s.,!?;:(){}"'«»\-–—]+|[\s.,!?;:(){}"'«»\-–—]/g;
    const wordSplit = line.match(regexSplit);

    const format = wordSplit.map((word, index) => {
      let colorSyntax = "";
      if (/function|const|let/.test(word)) {
        colorSyntax = "keyWord";
      } else if (/\d/.test(word)) {
        colorSyntax = "numbers";
      } else if (/[{}()'"]/.test(word)) {
        colorSyntax = "punctuation";
      } else if (word === "return") {
        colorSyntax = "return";
      }

      return word === " " ? (
        <span key={`word-input-${index}`} className={`${colorSyntax}`}>
          {word}&nbsp;
        </span>
      ) : (
        <span key={`word-input-${index}`} className={`${colorSyntax}`}>
          {word}
        </span>
      );
    });
    return format;
  }

  return (
    <div className="code-editor">
      <div className="lineNumbers">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
      </div>

      <div className="lineCode-container">
        <JSCodeInput />
        <div className="lineCode--displayer">
          {lines.map((line, index) => (
            <div className="code-input" key={`line-input-${index}`}>
              {wordColorFormat(line)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
