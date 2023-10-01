import React, { useRef } from 'react'
import Child from './Child'

function Parent() {
    const ref = useRef();
    const handleClick = () => {
        console.log('parent component');
        ref.current.handincrement();
    }
    return (
        <div>
            Parent
            <Child ref={ref} />
            <button onClick={handleClick}>parent button</button>
        </div>
    )
}

export default Parent