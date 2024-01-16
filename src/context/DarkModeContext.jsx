import { createContext, useState } from "react";

export const DarkModeContext = createContext({});

export const DarkModeProvider = ({ children }) => {
  let [isDark, setisDark] = useState(false);
  let [inputValue,setInputValue]=useState("")
  let [isedit,setisedit]=useState(false)
  let [updateid,setUpdateId]=useState("")
  function handleToggle() {
    document.documentElement.classList.toggle("dark");
    setisDark((prev) => !prev);
  }

  return (
    <DarkModeContext.Provider
      value={{ handleToggle, isDark, setisDark,inputValue,setInputValue,isedit,setisedit ,updateid,setUpdateId}}>
        {children}
    </DarkModeContext.Provider>
  );
};
