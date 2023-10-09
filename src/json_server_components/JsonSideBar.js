import React from 'react'
import { Link } from 'react-router-dom'

function JsonSideBar() {
    return (
        <div>
            <Link to="/get-data"> Get Request</Link>
            <Link to="/get-sort-data"> | Get Sort Data</Link>
        </div>
    )
}

export default JsonSideBar