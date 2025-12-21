import { useDispatch, useSelector } from "react-redux";
import { updateIframe } from "./iframeSlice";

export default function RunCodeBtn() {
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.codeInputSlice);

  function handleClick() {
    dispatch(
      updateIframe({
        codeJS: userInput.codeJS,
        codeCSS: userInput.codeCSS,
        codeHTML: userInput.codeHTML,
      })
    );
  }

  return <button onClick={handleClick} className="run-code"></button>;
}
