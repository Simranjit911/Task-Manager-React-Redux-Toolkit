import { createSlice, nanoid } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
let initialState = []
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            let todo = {
                id: nanoid(),
                task: action.payload,
                completed: false
            }
            state.push(todo)
            toast.success("Task added Succesfully")
        },
        //LocalStorage fn
        loadData: (state, action) => {
            let data = action.payload
            console.log("load", data)
            state = data.map((item) => state.push(item))
        },
        remove: (state, action) => {
            console.log(state.length)
            if (state.length == 1) {
                localStorage.clear()
            }
            toast.success("Task deleted Succesfully")
            return state.filter((todo) => todo.id != action.payload)
        },
        setCompleted: (state, action) => {

            toast.success("Task status updated!")

            return state.map((todo) => {
              return  todo.id == action.payload.id ?
                 { ...todo, completed: !todo.completed }
                    

                  : todo
            })
        },
        updateValue: (state, action) => {
            let { inputValue, updateid } = action.payload
            toast.success("Task Updated Succesfully")
            return state.map((item) => item.id == updateid ? { ...item, task: inputValue } : item)
        }
    }
})
//localStorage DataFn Run in initail
export function getData(dis) {
    console.log("call")
    let todos = localStorage.getItem("todos")
    if (todos) {
        todos = JSON.parse(localStorage.getItem("todos"))
        console.log(todos)
        dis(loadData(todos))
    }
}
export const { add, remove, loadData, setCompleted, updateValue } = todoSlice.actions
export default todoSlice.reducer