import React, { useState } from 'react'
import useLogger from '../components/custom_hooks/useLogger'

export default function UseLoggerHook() {
    const [text, setText] = useState('')
    useLogger(text)
    return (
        <div>
            UseLoggerHook
            <br />
            <input type="text" name="name" id="name" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}
