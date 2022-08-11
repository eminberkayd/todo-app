import dustbin from '../icons/dustbin.PNG';
import { useState } from 'react';

const Todo = (props) => {
    const [Done, setDone] = useState(false);
    const delTodo = () => {

        props.edit((prevState) => {
            prevState.splice(props.index, 1);

            console.log("After Deleting the new State is:", prevState)
            return [...prevState];

        })
    }

    const changeMode = (e) => {


        props.edit((prevState) => {
            prevState[props.index].status === 'active' ? prevState[props.index].status = 'completed' : prevState[props.index].status = 'active'
            return [...prevState];
        })
        setDone(!Done);
    }
    return (<>
        <div className="row pb-3">
            <button className='col-1 btn my-auto' onClick={changeMode}>Done</button>
            <div style={{ textDecoration: props.todo.status === 'completed' ? 'line-through' : 'none' }} className='text-break col-10 px-3 text-black bg-info rounded display-3'>{props.todo.value}</div>
            <img className="col-1 display-5 img-fluid rounded" onClick={delTodo} alt="delete" src={dustbin} />
        </div>
    </>
    );
}



const TodoList = (props) => {
    //<TodoList todos={Todos} edit={setTodos} option={Option} />
    return (
        <>
            {
                props.option === 'All' &&
                props.todos.map((elem, index) => {
                    return <Todo key={index} index={index} todo={elem} edit={props.edit} />
                })
            }
            {
                props.option === 'Active' &&
                props.todos.map((elem, index) => {
                    {
                        if (elem.status === 'active') {
                            return <Todo key={index} index={index} todo={elem} edit={props.edit} />
                        }
                    }
                })
            }
            {
                props.option === 'Completed' &&
                props.todos.map((elem, index) => {
                    {
                        if (elem.status === 'completed') {
                            return <Todo key={index} index={index} todo={elem} edit={props.edit} />
                        }
                    }
                })
            }

        </>

    );




}

export default TodoList;