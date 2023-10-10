import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToDo, updateToDo } from './redux_components/slice_components/DoToSlice';

function ToDoListing() {
    const [update, setUpdate] = useState(false);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const state = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const removTodo = (doto) => {
        dispatch(removeToDo(doto?.name))
    }

    const handleUpdate = (doto) => {
        setName(doto.name);
        setType(doto.type);
        setUpdate(true)
    }

    const handleUpdateToDo = () => {
        const payload = { name, type }
        dispatch(updateToDo(payload));
    }
    return (
        <div>ToDoListing
            <br />
            {state?.map((doto, index) => {
                return <div key={index}>
                    <p>{doto.name}</p>
                    <p>{doto.type}</p>
                    <button onClick={() => removTodo(doto)}>remove to do</button>
                    <br />
                    <button onClick={() => handleUpdate(doto)} >update</button>
                </div>
            })}
            {update && <div>
                update data here
                <br />
                <form>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <input type="text" name="type" id="type" value={type} onChange={(e) => setType(e.target.value)} />
                    <br />
                    <button type='button' onClick={handleUpdateToDo}>Update data</button>
                </form>
            </div>}
        </div>
    )
}

export default ToDoListing