import { useState, useEffect } from 'react';
import Header from "./Header";
import TodoList from './TodoList';


const Container = () => {
    const [Todos, setTodos] = useState([]);
    const [Option, setOption] = useState("All");

    useEffect(() => {
        console.log("todos changed:", Todos);


    }, [Todos])

    const activeCounter = () => {
        let ctr = 0;
        for (let i = 0; i < Todos.length; i++) {
            if (Todos[i].status === 'active') {
                ctr += 1;
            }
        }
        return ctr;
    }


    const optionChange = (e) => {

        setOption(e.target.innerHTML);
    }

    const clearCompleted = () => {
        const newTodos = []
        for (let i = 0; i < Todos.length; i++) {
            if (Todos[i].status !== 'completed') {
                newTodos.push(Todos[i]);
            }
        }
        if (Todos.length != newTodos.length) {
            setTodos(newTodos);
        }
    }
    return <>
        <div className='container'>
            <Header addNew={setTodos} />
            <div className="row pb-5">
                <button className="col-3 border-0 shadow btn btn-outline-secondary ms-auto" onClick={optionChange}>All</button>
                <button className="col-3 border-0 shadow btn btn-outline-secondary " onClick={optionChange}>Active</button>
                <button className="col-3 border-0 shadow btn btn-outline-secondary me-auto" onClick={optionChange}>Completed</button>
                <button className="col-3 border-0 " onClick={clearCompleted}>Clear completed</button>
            </div>
            <div className='col-8 mx-auto pb-3 text-center'> There are {activeCounter()} things to do.</div>
            <TodoList todos={Todos} edit={setTodos} option={Option} />
        </div>
        <a className='mx-auto px-auto row col-2 pt-5 pb-4' href='https://github.com/eminberkayd/todo-app'>Codes</a>
    </>

}

export default Container;