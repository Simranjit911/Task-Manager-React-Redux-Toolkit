import { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Lists from "./components/Lists";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./redux/todoSlice";

export default function App() {
  let [sort, setsort] = useState("default");
  let [search, setsearch] = useState("");

  let dispatch = useDispatch();
  let todos = useSelector((state) => state.todo);
  console.log(todos);
  useEffect(() => {
    getData(dispatch);
  }, []);

  return (
    <div className="transition-all duration-500 ease-in  w-[100%] h-screen mx-auto p-4 bg-blue-300 dark:bg-slate-900 dark:text-white">
      <Header />
      <Input />
      {todos.length >0 && (
        <div className="md:w-1/2 mx-auto flex justify-between px-2 text-sm  mb-5">
          <select
            onChange={(e) => setsort(e.target.value)}
            className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none dark:text-black"
          >
            <option className="text-black " value="default">
              Default
            </option>
            <option className=" text-black " value="completed">
              Completed
            </option>
            <option className=" text-black" value="incompleted">
              Incompleted
            </option>
          </select>
          <input
            type="search"
            onChange={(e) => setsearch(e.target.value)}
            value={search}
            className="outline-none border-none rounded-md placeholder:text-black text-black px-2 py-0.5 md:py-1 bg-slate-200 shadow-xl"
            placeholder="Search tasks"
          />
        </div>
      )}

      {todos.length > 0 ? (
        todos
          .filter((item) => {
            if (sort == "completed" && item.completed == true) {
              return item;
            }
            if (sort == "incompleted" && item.completed == false) {
              return item;
            }
            if (sort == "default") {
              return item;
            }
          })
          .filter((item) => {
            if (item.task.includes(search)) {
              return item;
            }
          })
          .map((todo, idx) => {
            return <Lists key={idx} data={todo} />;
          })
      ) : (
        <div className="flex justify-center font-semibold text-lg  items-center">
          Start Managing Your Tasks
        </div>
      )}
    </div>
  );
}
