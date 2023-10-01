import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Child = forwardRef(({ props }, ref) => {
    const [count, setCount] = useState(0);
    const handincrement = () => {
        console.log('child components');
        setCount(prev => prev + 1)
    }
    useImperativeHandle(ref, () => ({
        handincrement
    }));

    return (
        <div>
            Child
            <br />
            {count}
            <br />
            <button onClick={handincrement}>child increment</button>
        </div>
    )
});

export default Child