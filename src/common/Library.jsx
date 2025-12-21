import { useState } from "react";
import { list } from "../features/AlgorithmsLibrary/algorithmsLibraryIndex";
import EmptyProject from "../features/emptyProject/EmptyProject";
import AlgorithmBtn from "../features/AlgorithmsLibrary/AlgorithmButton";
import folderCode from "../assets/folderCode.svg";
import leftChevron from "../assets/leftChevron.svg";

export default function Library() {
  const [toggleList, setToggleList] = useState(false);
  return (
    <div className="library-container">
      <EmptyProject />
      <button
        onClick={() => setToggleList(!toggleList)}
        className="toggle-library"
      >
        <img src={folderCode} alt="folder code icon" width={16} height={16} />
        <span>Algorithms library</span>
        <img
          src={leftChevron}
          alt="chevron"
          width={24}
          height={24}
          className={`chevron-library ${toggleList ? "active" : ""}`}
        />
      </button>
      {toggleList && (
        <div className="algorithm-list">
          <ul>
            {list.map((algo, index) => (
              <li key={`algorithm-${index}`}>
                <AlgorithmBtn content={algo} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
