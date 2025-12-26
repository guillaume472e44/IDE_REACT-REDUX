import folderCode from "../../assets/folderCode.svg";
import leftChevron from "../../assets/leftChevron.svg";

export default function ToggleList({setToggleList, toggleList}) {
  return (
    <button onClick={() => setToggleList(!toggleList)} className="toggle-list">
      <img src={folderCode} alt="folder code icon" width={16} height={16} />
      <span>Library</span>
      <img
        src={leftChevron}
        alt="chevron"
        width={24}
        height={24}
        className={`chevron-library ${toggleList ? "active" : ""}`}
      />
    </button>
  );
}
