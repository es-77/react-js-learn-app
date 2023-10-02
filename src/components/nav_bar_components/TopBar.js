import React from 'react'

function TopBar() {
    return (
        <div>
            <ul>
                <li><a href="/"> Home</a></li>
                <li><a href="/about">About </a></li>
                <li><a href="/get-id/123">Id in url</a></li>
            </ul>
        </div>
    )
}

export default TopBar