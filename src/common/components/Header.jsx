import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../features/codeInput/codeInputSlice";
import JSlogo from "../../assets/js.svg";
import CSSlogo from "../../assets/css.svg";
import HTMLlogo from "../../assets/html.svg";
import DOWNLOADlogo from "../../assets/download.svg";

export default function Header() {
  const dispatch = useDispatch();
  const currentCode = useSelector((state) => state.codeInputSlice.currentCode);
  const codeButtons = [
    { language: "codeJS", img: JSlogo, class: "js", text: "script.js" },
    { language: "codeCSS", img: CSSlogo, class: "css", text: "style.css" },
    { language: "codeHTML", img: HTMLlogo, class: "html", text: "index.html" },
  ];

  return (
    <div className="header-container">
      <div className="left-side">
        {codeButtons.map((button, index) => (
          <button
            key={`codeBtn-${index}`}
            onClick={() => dispatch(setCurrent(button.language))}
            className={`lang-tabs ${button.class} ${
              currentCode === button.language ? "active" : ""
            } `}
          >
            <img
              src={button.img}
              alt={button.language}
              width={16}
              height={16}
            />
            <span>{button.text}</span>
          </button>
        ))}
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
