import { useRef, useEffect, useState, useCallback } from "react";

export default function CodeEditor() {
  const inputRef = useRef(null);
  const coloredInput = useRef(null);

  const [code, setCode] = useState("");
  const [lineNumber, setLigneNumber] = useState(1);

  // --- Logique de Coloration ---
  // const applySyntaxHighlighting = useCallback((text) => {
  //   // Échappement HTML des caractères spéciaux (<, >, &)
  //   let formattedText = text
  //     .replace(/&/g, "&amp;")
  //     .replace(/</g, "&lt;")
  //     .replace(/>/g, "&gt;");

  //   let wordColoration = formattedText;

  //   // Identifie les strings simples ou doubles (incluant l'échappement)
  //   const STRING_REGEX = /("(\\"|[^"])*")|('(\\'|[^'])*')/g;
  //   // wordColoration = wordColoration.replace(STRING_REGEX, (match) => {
  //   //   return `<span class="string">${match}</span>`;
  //   // });

  //   // Identifie les commentaires //... ou /*...*/
  //   const COMMENT_REGEX = /(\/\/.*)|(\/\*[\s\S]*?\*\/)/g;
  //   // wordColoration = wordColoration.replace(COMMENT_REGEX, (match) => {
  //   //   return `<span class="comment">${match}</span>`;
  //   // });

  //   // Identifie les jetons restants (mots-clés, variables, ponctuation, nombres)
  //   const TOKEN_REGEX = /[^\s.,!?;:(){}"'«»\-–—]+|[\s.,!?;:(){}"'«»\-–—]/g;
  //   const codeSplit = wordColoration.match(TOKEN_REGEX);

  //   // const regexSplit = /[^\s.,!?;:(){}"'«»\-–—]+|[\s.,!?;:(){}"'«»\-–—]/g;
  //   // const codeSplit = formattedText.match(regexSplit);

  //   // Colore les mots-clés simples
  //   const keywords = /(const|let|function|if|else)/;
  //   const punctuation = /[(){}'"[\]]/;
  //   let currentLineNumber = 1;
  //   const formateCode = codeSplit?.map((input) => {
  //     if (keywords.test(input)) {
  //       return `<span class="keyWord">${input}</span>`;
  //     } else if (punctuation.test(input)) {
  //       return `<span class="punctuation">${input}</span>`;
  //     } else if (/\d/.test(input)) {
  //       return `<span class="numbers">${input}</span>`;
  //     } else if (/\n/.test(input)) {
  //       currentLineNumber++;
  //       return input;
  //     }
  //     return input;
  //   });
  //   setLigneNumber(currentLineNumber);

  //   return formateCode ? formateCode.join("") : "";
  // }, []);

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

  function getlineNumber() {
    let rows = [];
    for (let i = 0; i < lineNumber; i++) {
      rows.push(<span key={i}>{i + 1}</span>);
    }
    return rows;
  }

  useEffect(() => {
    if (coloredInput.current) {
      coloredInput.current.innerHTML = applySyntaxHighlighting(code);
    }

    function applySyntaxHighlighting(text) {
      // Échappement HTML des caractères spéciaux (<, >, &)
      let formattedText = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      // sépare toutes les entrées dans un tableau
      const TOKEN_REGEX = /[^\s.,!?;:(){}"'«»\-–—]+|[\s.,!?;:(){}"'«»\-–—]/g;
      const codeSplit = formattedText.match(TOKEN_REGEX);
      // Coloration simple (mots clé, nombres et ponctuation)
      const keywords = /(const|let|function|if|else)/;
      const punctuation = /[(){}'"[\]]/;
      let currentLineNumber = 1;
      const formateCode = codeSplit?.map((input) => {
        if (keywords.test(input)) {
          return `<span class="keyWord">${input}</span>`;
        } else if (punctuation.test(input)) {
          return `<span class="punctuation">${input}</span>`;
        } else if (/\d/.test(input)) {
          return `<span class="numbers">${input}</span>`;
        } else if (/\n/.test(input)) {
          currentLineNumber++;
          return input;
        }
        return input;
      });
      setLigneNumber(currentLineNumber);
      return formateCode ? formateCode.join("") : "";
    }
  }, [code]);

  return (
    <div className="code-editor">
      <div className="lineNumbers"> {getlineNumber()} </div>
      <div className="lineCode-container">
        <div className="lineCode--displayer" ref={coloredInput}></div>
        <textarea
          className="lineCode--input"
          ref={inputRef}
          value={code}
          onChange={handleChange}
          // onScroll={handleScroll}
          spellCheck="false"
        ></textarea>
      </div>
    </div>
  );
}
