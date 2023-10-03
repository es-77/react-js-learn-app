import React, { useState } from 'react'

function Child({myfunction}) {
 const [text,setText] = useState('');
    const childrenFunction = ()=>{
        myfunction(text);
    }
  return (
    <div>Child
    <br />
    <input type='text' placeholder='enter your name' onChange={(e)=>setText(e.target.value)}/>
    <br />


    <button onClick={childrenFunction}>click here to send data</button>
    </div>
  )
}

export default Child
