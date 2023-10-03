function A(props) {
    // const [count,setCount] = useState(0);
    // const increment = ()=>{
    //     setCount(prev=>prev+1);
    // }
  return (
    <div>
    A
    <br />
    <button onClick={props.increment}> click on button to increment {props.count}</button>

    </div>
  )
}

export default A
