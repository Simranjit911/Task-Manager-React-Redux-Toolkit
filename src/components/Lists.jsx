import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { remove, setCompleted } from "../redux/todoSlice";
import { useContext, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { DarkModeContext } from "../context/DarkModeContext";
function Lists({ data }) {
  let { isedit, setisedit, setInputValue, InputValue, updateid, setUpdateId } =
    useContext(DarkModeContext);
  let { task, id, completed } = data;
  let dispatch = useDispatch();
  let todos = useSelector((state) => state.todo);

  useEffect(() => {
    localStorage.setItem(
      "todos",
      todos.length > 0 ? JSON.stringify(todos) : []
    );
  }, [todos]);
  return (
    <div className=" mx-auto" key={id}>
      <ol className="flex ">
        <li
          key={id}
          className="md:w-1/2 w-[95%] my-1 mx-auto flex shadow-2xl rounded-md px-3 pr-4 md:px-2 py-1  justify-evenly items-center flex-wrap bg-blue-600 bg-opacity-50 font-semibold"
        >
          <p className={`w-[85%] text-left ${completed && "line-through"}`}>
            {task}
          </p>
          <div className="w-[15%] mx-auto flex justify-around items-center text-xl">
            <button
              onClick={() => {
                setisedit(true);
                setInputValue(task);
                setUpdateId(id);
              }}
            >
              <FaEdit />
            </button>
            <button
              onClick={() => {
                dispatch(remove(id));
              }}
            >
              <MdDelete />
            </button>
            <button onClick={() => dispatch(setCompleted(data))}>
              {!completed ? <IoMdDoneAll /> : <RxCross1 />}
            </button>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Lists;
