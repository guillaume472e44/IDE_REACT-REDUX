import { useDispatch } from "react-redux";
import { setCurrent } from "../../features/codeInput/codeInputSlice";
import JSlogo from "../../assets/js.svg";
import CSSlogo from "../../assets/css.svg";
import HTMLlogo from "../../assets/html.svg";
import DOWNLOADlogo from "../../assets/download.svg";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <div className="header-container">
      <div className="left-side">
        <button
          onClick={() => dispatch(setCurrent("codeJS"))}
          className="lang-tabs js"
        >
          <img src={JSlogo} alt="logo javascript" width={16} height={16} />
          <span>script.js</span>
        </button>
        <button
          onClick={() => dispatch(setCurrent("codeCSS"))}
          className="lang-tabs css"
        >
          <img src={CSSlogo} alt="logo css" width={16} height={16} />
          <span>style.css</span>
        </button>
        <button
          onClick={() => dispatch(setCurrent("codeHTML"))}
          className="lang-tabs html"
        >
          <img src={HTMLlogo} alt="logo html" width={16} height={16} />
          <span>index.html</span>
        </button>
      </div>
      <div className="right-side">
        <button className="download-code">
          <img src={DOWNLOADlogo} alt="logo download" width={16} height={16} />
          <span>Get the code</span>
        </button>
      </div>
    </div>
  );
}
