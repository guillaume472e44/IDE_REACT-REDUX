import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLines, addLine } from "./jsCodeInputSlice";

export default function JSCodeInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  const dispatch = useDispatch();

  function preventDelete(e) {
    // Evite de supprimer la première div si on spam le delete
    if (e.key === "Backspace") {
      if (
        e.currentTarget.childNodes.length === 1 &&
        e.currentTarget.childNodes[0].textContent.length === 1
      ) {
        e.currentTarget.childNodes[0].innerHTML = "&#8203";
      }
      // si la touche d'effacement est maintenue :
      handleInput(e);
    }
    if (e.key === "Enter") {
      dispatch(addLine());
    }
  }
  function handleInput(e) {
    if (e.key === "Enter") return;
    [...e.currentTarget.childNodes].forEach((node, index) => {
      dispatch(setLines({ index, text: node.textContent }));
    });
  }

  return (
    <div
      ref={inputRef}
      className="lineCode--input"
      contentEditable="true"
      spellCheck="false"
      autoCorrect="off"
      autoCapitalize="none"
      translate="no"
      role="textbox"
      onKeyDown={preventDelete}
      onKeyUp={handleInput}
      suppressContentEditableWarning={true}
    ></div>
  );
}
