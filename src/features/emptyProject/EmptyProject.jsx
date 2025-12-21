import { useDispatch } from "react-redux";
import { emptyProject } from "../codeInput/codeInputSlice";

export default function EmptyProject() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(emptyProject());
  }
  return (
    <button onClick={handleClick} className="empty-project">
      Empty Project
    </button>
  );
}
