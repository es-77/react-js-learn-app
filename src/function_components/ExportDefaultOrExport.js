import React from 'react'

function ExportDefaultOrExport() {
  return (
    <>
    <div>
      default export default function
    </div>
    </>
  )
}

const MyFunction1 =()=>{
    return <h1> export functions 1</h1>
}
const MyFunction2 =()=>{
    return <h1> export functions 2</h1>
}

// not working in first letter in small like below
// export {myFunction1,myFunction2}
export {MyFunction1,MyFunction2}
export default ExportDefaultOrExport
