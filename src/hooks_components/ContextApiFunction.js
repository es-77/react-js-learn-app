import React from 'react'
import A from '../components/context_api/A'

let Name = React.createContext();
let LastName = React.createContext();

function ContextApiFunction() {
  return (
    <div>ContextApiFunction

    <br />
    <Name.Provider value='Emmanuel'>
    <LastName.Provider value='Saleem'>
        <A/>
    </LastName.Provider>
    </Name.Provider>

    </div>
  )
}
export {Name,LastName}
export default ContextApiFunction
