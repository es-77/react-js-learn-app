import React from 'react'
import HigherOrderMainCounterComponent from './HigherOrderMainCounterComponent';

function A(props) {
    const {increment,count,name} = props;

    // const [count ,setCount] = useState(0)
    // const increment =()=>{
    //     setCount(perv=>perv+1);
    // }
  return (
    <div>
    {name}
    <br />
    <button onClick={increment} > count {count} click</button>
    </div>
  )
}

export default HigherOrderMainCounterComponent(A)
