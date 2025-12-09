import { useRef, useEffect, useState, useCallback } from "react";

export default function CodeEditor() {
  const inputRef = useRef(null);
  const coloredInput = useRef(null);

  const [code, setCode] = useState("");

  // --- Logique de Coloration ---
  const applySyntaxHighlighting = useCallback((text) => {
    let formattedText = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Colore les mots-clés simples
    const keywords = /(const|let|function|if|else)/g;
    const punctuation = /("|'\(|\)|{|})/g;
    formattedText = formattedText.replace(
      keywords,
      '<span class="keyWord">$&</span>'
    );

    return formattedText;
  }, []);

  // --- Fonction de Synchronisation du Défilement ---
  const handleScroll = () => {
    if (inputRef.current && coloredInput.current) {
      // Synchronisation : lorsque l'input (textarea) défile, la div doit suivre
      coloredInput.current.scrollTop = inputRef.current.scrollTop;
      coloredInput.current.scrollLeft = inputRef.current.scrollLeft;
    }
  };

  function handleChange(e) {
    setCode(e.currentTarget.value);
  }

  useEffect(() => {
    if (coloredInput.current) {
      coloredInput.current.innerHTML = applySyntaxHighlighting(code);
    }
  }, [applySyntaxHighlighting, code]);

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
        <div className="lineCode--displayer" ref={coloredInput}></div>
        <textarea
          className="lineCode--input"
          ref={inputRef}
          value={code}
          onChange={handleChange}
          onScroll={handleScroll}
          spellCheck="false"
        ></textarea>
      </div>
    </div>
  );
}
