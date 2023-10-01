import React, { useDebugValue, useState } from 'react'

export default function UseDebugValueHook() {
    /*
    * first install react devtool
    to to component click on UseDebugValueHook or your component name 
    **/
    const [text, setText] = useState('')
    useDebugValue(text)
    return (
        <div>
            UseDebugValueHook
            <br />
            <input type="text" name="name" id="name" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}
