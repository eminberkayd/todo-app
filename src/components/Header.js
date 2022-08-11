import { useState } from "react";

const Header = (props) => {
    const [newTodo, setNewTodo] = useState("")
    const submitNew = () => {

        if (newTodo !== "") {
            console.log(newTodo);
            props.addNew((e) => [...e, { value: newTodo, status: "active" }])
            setNewTodo("");
        }
    }


    return <>
        <div className="pt-3">
            <div className="row">
                <div className="col-12 display-2 pb-5 ">
                    TodoList
                </div>
            </div>
            <div className="row pb-3 display-4">

                <input className="col-8 mt-5 mb-5 pb-1" type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo} placeholder="New Todo" />
                <button className="col-4 border mt-5 mb-5" onClick={submitNew}>ADD</button>

            </div>

        </div>
    </>

}

export default Header;