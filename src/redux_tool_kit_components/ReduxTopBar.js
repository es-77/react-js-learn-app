import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ReduxTopBar() {
    const data = useSelector(state => state.todos)
    return (
        <div>
            <p> count of to do: {data.length}</p>
            <Link to='/redux_page'>Redux Page</Link>
            <Link to='/add-to-do'> | Add To Do</Link>
            <Link to='/list-to-do'> | List To Do</Link>
        </div>
    )
}

export default ReduxTopBar