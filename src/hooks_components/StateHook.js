import React, { useState } from 'react'

function itemFunction() {
    console.log('item function');
    return 0;
}

export default function StateHook() {
    const [state, setSate] = useState(0);
    // call state like constructor
    const [constuctorState, setContructorState] = useState(() => {
        console.log('hello contructor')
        return 0
    })
    // differende between uper example
    const [item, setItem] = useState(itemFunction())
    // use state as a object
    const [stateObject, setStateObject] = useState({ count: 0, name: 'increment' });

    // strictriction
    // not do like this
    // if(true){
    //     const [example,setExample] = useState();
    // }
    // function myFunction() {
    //     const [example, setExample] = useState();
    // }
    const handleIncrement = () => {
        setSate(state + 1);
        // not work like that
        // setSate(state + 1);
        // setSate(state + 1);
        // achieve this functionality do like this
        // setSate(prev => prev + 1)

        // if you do this it will remove the name or other field if exist in object
        // setStateObject(prev => {
        //     return { count: prev.count + 1 };
        // })
        setStateObject(prev => {
            return { ...prev, count: prev.count + 1, name: 'increment' };
        })
    }
    const handleDecrement = () => {
        setSate(state - 1);
        // also do for decrement
        setStateObject(prev => {
            return { ...prev, count: prev.count - 1, name: 'decrement' }
        })
    }
    return (
        <div>
            state hook
            <br></br>
            <button onClick={handleIncrement}>+</button>
            {state}
            <button onClick={handleDecrement}>-</button>

            <br />
            object data render <br />
            count = {stateObject.count}  name = {stateObject.name}
        </div>
    )
}
