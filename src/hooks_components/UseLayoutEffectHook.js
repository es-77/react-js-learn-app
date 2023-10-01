import React, { useEffect, useLayoutEffect, useRef } from 'react'

export default function UseLayoutEffectHook() {
    const ref = useRef('red')
    useEffect(() => {
        ref.current = 'yellow';
        console.log(ref, 'use effect');
        // below code work
        // window.scrollTo(0, 500);
    })
    useLayoutEffect(() => {
        console.log(ref, 'use layout');
        // below code not work
        window.scrollTo(0, 1000);
    })
    return (
        <div style={{ height: '1000vh' }}>
            UseLayoutEffectHook
            <br />

        </div>
    )
}
