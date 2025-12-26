import leftChevron from "../../assets/leftChevron.svg";

export default function ToggleLibrary({ setToggleLibrary, toggleLibrary }) {
  return (
    <button
      onClick={() => setToggleLibrary(!toggleLibrary)}
      className="toggle-library"
    >
      <img
        className={`${toggleLibrary ? "active" : ""}`}
        src={leftChevron}
        alt="chevron"
        width={24}
        height={24}
      />
    </button>
  );
}
