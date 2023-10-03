import React, { useState } from 'react'
import HigherOrderMainCounterComponent from './HigherOrderMainCounterComponent';

function B(props) {
    const {increment,count,name} = props;
    // const [count ,setCount] = useState(0)
    // const increment =()=>{
    //     setCount(perv=>perv+1);
    // }
  return (
    <div>
    {name}
    <br />
    <button onMouseOver={increment} > count {count} mouse hover</button>
    </div>
  )
}

export default HigherOrderMainCounterComponent(B)
