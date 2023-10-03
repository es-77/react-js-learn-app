import React from 'react'

function Child(props) {
    const handleClick = (e)=>{
        alert(123+e.target.id);
    }
  return (
    <div>
    Child
    <br/>
    {props.name} === {props.father}
    <br/>
    <button id="my_id" onClick={(e)=>handleClick(e)} > click here</button>
    </div>
  )
}

export default Child
