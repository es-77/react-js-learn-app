import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToDo } from './redux_components/slice_components/DoToSlice';

function DoToAddForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const handlClick = () => {
        const payload = { name, type }
        console.log("do to form data", payload);
        dispatch(addToDo(payload));
    }
    return (
        <div>DoToAddForm
            <br />
            <form>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="text" name="type" id="type" value={type} onChange={(e) => setType(e.target.value)} />
                <br />
                <button type='button' onClick={handlClick}>save do to</button>
            </form>
        </div>
    )
}

export default DoToAddForm