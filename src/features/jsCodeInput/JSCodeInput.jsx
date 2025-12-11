import { useDispatch, useSelector } from "react-redux";
import { updateCode } from "./jsCodeInputSlice";

export default function JSCodeInput() {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.jsCodeInputSlice.code);

  function handleChange(e) {
    dispatch(updateCode(e.currentTarget.value));
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
