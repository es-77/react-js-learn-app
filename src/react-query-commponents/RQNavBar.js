import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function RQNavBar() {
    return (
        <div>
            <p>
                <Link to='/qr-home'> Home</Link>
                <Link to='/qr-about'> | About</Link>
                <Link to='/qr-old-method'> | Old Method get data</Link>
                <Link to='/qr-load-data-react-query'> | load data react query</Link>
                <Link to='/qr-poling'> | Data Poling</Link>
                <Link to='/qr-get-data-on-button-click'> | Get Data On Button Click</Link>
                <Link to='/qr-success-error-fall-back'> | Success Error Fall Back</Link>
                <Link to='/qr-data-transform'> | Data Transform</Link>
                <Link to='/qr-custom-hook'> | Data Custom Hook</Link>
                <Link to='/qr-query-by-id'> | Query By Id</Link>
                <Link to='/qr-parallel-query'> | Parallel Query</Link>
                <Link to='/qr-dynamic-query'> | Dynamic Query</Link>
                <Link to='/qr-depend-query'> | Depend Query</Link>
                <Link to='/qr-paginated-query'> | Paginated Query</Link>
                <Link to='/qr-submit-query'> | Submit Query</Link>
            </p>
        </div>
    )
}

export default RQNavBar