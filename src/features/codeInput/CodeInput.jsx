import { useDispatch, useSelector } from "react-redux";
import { updateCode } from "./codeInputSlice";

export default function CodeInput() {
  const dispatch = useDispatch();
  const codeParams = useSelector((state) => state.codeInputSlice);
  const code = codeParams[codeParams.currentCode];

  function handleChange(e) {
    dispatch(
      updateCode({
        current: codeParams.currentCode,
        content: e.currentTarget.value,
      })
    );
  }

  return (
    <textarea
      className="lineCode--input"
      value={code}
      onChange={handleChange}
      spellCheck="false"
    ></textarea>
  );
}
