import React, { useRef } from 'react'

export default function UseRefHook() {
    const refInput = useRef();
    function handleClick() {
        console.log('function call', refInput.current.value);
        refInput.current.focus();
        // refInput.current.value = 'focus on input';
        // refInput.current.style.color = 'red';
        // refInput.current.style.display = 'none';
    }
    return (
        <div>
            UseRefHook
            <br />
            <input ref={refInput} type="text" name="name" id="name" />
            <br />
            <button onClick={handleClick}> click to focus on input</button>
        </div>
    )
}
