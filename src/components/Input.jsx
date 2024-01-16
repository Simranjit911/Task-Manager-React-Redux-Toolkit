import { useContext } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import {toast} from "react-hot-toast"
import { useSelector, useDispatch } from "react-redux";
import { DarkModeContext } from "../context/DarkModeContext";
import { add, updateValue } from "../redux/todoSlice";

function Input() {
  let { inputValue, setInputValue, isedit, setisedit, updateid, setUpdateId } =
    useContext(DarkModeContext);
  let dispatch = useDispatch();
  function handleInput() { 
    if(inputValue==""){
      return toast.error("Enter Some Text ")
    }

    if (isedit) {
      dispatch(updateValue({ inputValue, updateid }));
      setisedit(false);
      setUpdateId("");
      setInputValue("");
    } else {
      dispatch(add(inputValue));
      setInputValue("");
    }
  }
  return (
    <div className="flex items-center justify-center gap-2 my-3">
      <input
        onKeyDown={(e) => {
          if (e.key == "Enter") handleInput();
        }}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        className="md:w-1/2 w-[85%] outline-none border-none rounded-md placeholder:text-black text-black px-2 py-0.5 md:py-1 bg-slate-200 shadow-xl"
        placeholder="Enter Something.."
      />
      <button onClick={handleInput} className="text-xl">
        {isedit ? <TfiWrite /> : <span className="text-3xl"><IoIosAddCircle /></span> 
        
        }
      </button>
    </div>
  );
}

export default Input;
