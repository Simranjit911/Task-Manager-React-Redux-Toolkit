import React, { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { DarkModeContext } from "../context/DarkModeContext";
function Header() {
  let { handleToggle, isDark, setisDark } = useContext(DarkModeContext);
  return (
    <div className="font-bold md:text-xl flex justify-center gap-5 items-center">
      <p> Personal Task Management App</p>

      {!isDark ? (
        <button className="text-xl mt-1" onClick={() => handleToggle()}>
          <MdDarkMode />
        </button>
      ) : (
        <button className="text-xl mt-1" onClick={() => handleToggle()}>
          <MdOutlineLightMode />
        </button>
      )}
    </div>
  );
}

export default Header;
