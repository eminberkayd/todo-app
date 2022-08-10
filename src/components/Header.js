import { useState } from "react";

const Header = (props) => {
    const [newtodo, setnewtodo] = useState("")
    const submitnew = () => {
        console.log(newtodo);
        if (newtodo !== "") {
            props.addnew((e) => [...e, newtodo])
            setnewtodo("");
        }
    }

    return <>
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 display-2 pb-5 ">
                    TodoList
                </div>
            </div>
            <div className="row pb-5 display-4">

                <input className="col-8 mt-5 mb-5 pb-1" type="text" onChange={(e) => setnewtodo(e.target.value)} value={newtodo} placeholder="New todo"></input>
                <button className="col-4 border mt-5 mb-5" onClick={submitnew}>ADD</button>

            </div>
        </div>
    </>

}

export default Header;