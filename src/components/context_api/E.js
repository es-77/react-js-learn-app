import React from 'react'
import { Name,LastName } from '../../hooks_components/ContextApiFunction'

function E() {
  return (
    <div>
    <Name.Consumer>
        {(name)=>{
            return <p>{name}</p>
        }}
    </Name.Consumer>
    <LastName.Consumer>
        {(name)=>{
            return <p>{name}</p>
        }}
    </LastName.Consumer>
    E
    </div>
  )
}

export default E
