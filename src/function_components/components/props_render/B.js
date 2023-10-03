function B(props) {
    // const [count,setCount] = useState(0);
    // const increment = ()=>{
    //     setCount(prev=>prev+1);
    // }
  return (
    <div>
    B
    <br />
    <button onMouseOver={props.increment}> click on button to increment {props.count}</button>
    </div>
  )
}

export default B
