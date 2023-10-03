import React, { useState } from 'react'

const HigherOrderMainCounterComponent =(WrappedComponent)=>{
    function HigherOrderMainCounterComponent(props) {
        const [count ,setCount] = useState(0)
        const increment =()=>{
            setCount(perv=>perv+1);
        }
        return (
            <div>
                <WrappedComponent count={count} increment={increment} {...props}/>
            </div>
        )
    }
    return HigherOrderMainCounterComponent
}

export default HigherOrderMainCounterComponent
