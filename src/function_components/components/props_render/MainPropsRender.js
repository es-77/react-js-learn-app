import React, { useState } from 'react'

function MainPropsRender(props) {
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(prev=>prev+1);
    }
  return (
    <div>MainPropsRender
    <br />
    {props.render(increment,count)}
    </div>
  )
}

export default MainPropsRender
