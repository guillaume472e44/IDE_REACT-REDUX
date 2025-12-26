import { useState } from "react";
import { list } from "../features/AlgorithmsLibrary/algorithmsLibraryIndex";
import ToggleLibrary from "./components/ToggleLibrary";
import ToggleList from "./components/ToggleList";
import EmptyProject from "../features/emptyProject/EmptyProject";
import AlgorithmBtn from "../features/AlgorithmsLibrary/AlgorithmButton";

export default function Library() {
  const [toggleList, setToggleList] = useState(true);
  const [toggleLibrary, setToggleLibrary] = useState(true);

  list.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className={`library-container ${toggleLibrary ? "active" : ""} `}>
      <ToggleLibrary
        setToggleLibrary={setToggleLibrary}
        toggleLibrary={toggleLibrary}
      />
      <EmptyProject />
      <ToggleList setToggleList={setToggleList} toggleList={toggleList} />
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
