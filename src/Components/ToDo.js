import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../redux/actions/toDo.actions";

const ToDo = () => {
    const todoArray = useSelector(state => state.todo)
    const [text, setText] = useState("")
    const [editToDoId, setEditToDoId] = useState(null)

    const dispatch = useDispatch()


     function addTask(){
        editToDoId == null ?
        dispatch(addTodo({id: todoArray.length+1, title: text})):dispatch(updateTodo(editToDoId, text))

        setText("")
        setEditToDoId(null)
     }


    return(
        <div>
            <h2>My To-Dos</h2>
            <ul>
                {
                    todoArray.map(value =>(
                        <div key={value.id}>
                             <li key={value.id}>
                             <span> {value.title} </span>
                             <button onClick={()=> dispatch(removeTodo(value.id))}>D</button>
                             <button onClick={()=>setEditToDoId(value.id)}>U</button>
                             </li>   
                        </div>
                    ))
                }
            </ul>

            {editToDoId == null ?  <h3>Add Task</h3> : <h3>Update Task with id {editToDoId}</h3>}
             <input type="text" placeholder="Enter your Task"
                value={text}
                onChange={(e)=> setText(e.target.value)}
             />
             <button onClick={addTask}>Add</button>
        </div>
    )
}

export default ToDo;