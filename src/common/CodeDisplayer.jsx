import Iframe from "../features/screenDisplay/Iframe";
import RunCodeBtn from "../features/screenDisplay/RunCodeBtn";

export default function CodeDisplayer() {
  return (
    <div className="code-displayer">
      <div className="screen">
        <Iframe />
      </div>
      <RunCodeBtn />
    </div>
  );
}
