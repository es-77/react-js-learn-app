import React from 'react'

function MapFunction() {
    const number = [1, 2, 3, 4, 5, 6, 7, 8];
    var list = number.map((num)=>{
        return <p key={num}>{num}</p>;
    })
  return (
    <div>MapFunction
    <br />
    {/* {number && number.map((item)=>{
        return <p>{item}</p>
    })} */}

    {list}
    </div>
  )
}

export default MapFunction
