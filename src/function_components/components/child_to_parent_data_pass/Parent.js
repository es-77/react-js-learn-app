import React from 'react'
import Child from './Child'

function Parent(props) {

    const myfunction = (text)=>{
        alert(text);
    }

  return (
    <div>Parent
    <br />
    <Child myfunction={myfunction}/>
    <br />
    </div>
  )
}

export default Parent
