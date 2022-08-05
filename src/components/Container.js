import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import { useState } from "react";

const Container = () => {
    const [todos, settodos] = useState([]);
    const list_items = [];
    for (let i = 0; i < todos.length; i++) {
        list_items.push(<TodoList key={i} jobs={todos} value={todos[i]} onDelete={settodos} />)
    }
    return <>
        <NewTodo onSubmit={settodos} jobs={todos}></NewTodo>
        {list_items}

    </>


}

export default Container;