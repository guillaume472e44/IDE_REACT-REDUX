import { useDispatch } from "react-redux";
import { updateCode } from "../codeInput/codeInputSlice";
import { updateIframe } from "../screenDisplay/iframeSlice";

export default function AlgorithmButton({ content }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(updateCode({ current: "codeHTML", content: content.codeHTML }));
    dispatch(updateCode({ current: "codeCSS", content: content.codeCSS }));
    dispatch(updateCode({ current: "codeJS", content: content.codeJS }));

    dispatch(
      updateIframe({
        codeHTML: content.codeHTML,
        codeCSS: content.codeCSS,
        codeJS: content.codeJS,
      })
    );
  }

  return (
    <button onClick={handleClick} className="algorithm-btn">
      {content.name}
    </button>
  );
}
