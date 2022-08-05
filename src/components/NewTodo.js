import { useState } from 'react'
import './style.css'

const NewTodo = (props) => {
    const [newtodo, setnewtodo] = useState("");
    const todochange = (e) => {
        setnewtodo(e.target.value);
    }

    const addTodo = () => {
        console.log("add button pressed");
        props.onSubmit([...props.jobs, newtodo])
    }
    return <>
        <input className="input-text" type="text" value={newtodo} onChange={todochange} placeholder="New Todo"></input>
        <button className="add-button" onClick={addTodo}>Add</button>

    </>

}


export default NewTodo;