import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
    return (
        <div>
            <ul>
                {/* <li><a href="/"> Home</a></li>
                <li><a href="/about">About </a></li>
                <li><a href="/get-id/123">Id in url</a></li> */}
                <Link to="/"> Home</Link>
                <Link to="/about"> | About</Link>
                <Link to="/get-id/123"> | Id in url </Link>
                <Link to="/state-data" state={{ name: 'emmaneul', father: 'saleem' }}> | also pass data through state in link </Link>
            </ul>
        </div>
    )
}

export default TopBar