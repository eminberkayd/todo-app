import dustbin from '../icons/dustbin.PNG';
import React
    from 'react';
const Todo = (props) => {

    const edit = () => {

        props.editordel((prevState) => {
            prevState.splice(props.index, 1);
            console.log(prevState)
            console.log("you clicked the item");
            return prevState;
        })
    }



    return <>


        <tr className='row pb-2'>
            <td className='col-11 text-black bg-info rounded display-3 ml-auto'>{props.todo}</td>
            <td className='col-1'><img className="display-5 img-fluid rounded" onClick={edit} alt="delete" src={dustbin} /></td>
        </tr>



    </>
    /*
    return <>
        <div className="row pb-2" >
            <div className="col-11 pt-1 pb-3 text-black-60 bg-success display-1 rounded">
                {props.todo}
            </div>
            <img className="col-1 display-5 d-block" onClick={edit} alt="delete" src={dustbin} />
        </div>

    </>
    */
}

export default React.memo(Todo);