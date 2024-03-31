import { useState } from "react";

const Buttons = () => {
  const [theme, setTheme] = useState("custom");

  const handleClick = (selectedTheme) => {
    setTheme(selectedTheme);
  };
  return (
    <div className="fixed bottom-5 z-[10] flex  w-full justify-center">
      <button
        className={`${theme === "custom" ? "bg-[#0959aa14]  text-[#0959AA] " : " bg-white text-[#0000008a]"} flex items-center gap-1 rounded-l-[10px] border border-[#bfccd980] px-4 py-3 `}
        onClick={() => handleClick("custom")}
      >
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiChip-icon MuiChip-iconSmall MuiChip-iconColorDefault css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="AutoAwesomeIcon"
          width="18px"
          height="18px"
          fill={`${theme === "custom" ? "#0959AA" : "#0000008a"}`}
        >
          <path d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"></path>
        </svg>
        Custom theme
      </button>
      <button
        className={`${theme === "material" ? "bg-[#0959aa14]  text-[#0959AA] " : " bg-white text-[#0000008a]"} rounded-r-[10px] border-b border-r border-t border-[#bfccd980] px-4  py-3 `}
        onClick={() => handleClick("material")}
      >
        Material Design 2
      </button>
    </div>
  );
};

export default Buttons;
