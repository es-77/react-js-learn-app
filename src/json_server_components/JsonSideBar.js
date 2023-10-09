import React from 'react'
import { Link } from 'react-router-dom'

function JsonSideBar() {
    return (
        <div>
            <Link to="/get-data"> Get Request</Link>
            <Link to="/get-sort-data"> | Get Sort Data</Link>
            <Link to="/get-pagination-data"> | Get Pagination Data</Link>
            <Link to="/get-opertor-data"> | Get Opertor Data</Link>
            <Link to="/get-not-equal-data"> | Get Not Equal Data</Link>
            <Link to="/get-like-operator-data"> | Get Like Operator Data</Link>
            <Link to="/get-full-text-search"> | Get Full Text Search</Link>
            <Link to="/get-relationship-data"> | Get Relationship Data</Link>
        </div>
    )
}

export default JsonSideBar