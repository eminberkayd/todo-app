import './style.css';
import { useState } from 'react';
const TodoList = (props) => {
    const [clicked, toggleClick] = useState(false)
    const toggle = () => {
        toggleClick(!clicked)

    }
    const deleteItem = () => {
        props.jobs.pop(props.value)
        props.onDelete([props.jobs])
        return <div>Nothing</div>
    }
    return <><div>
        <span className="list-elem" onClick={toggle}>{clicked ? <s> {props.value} </s> : props.value} </span>
        <span><button onClick={deleteItem}>Delete</button></span>
    </div>
    </>


}

export default TodoList;