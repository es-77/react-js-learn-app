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
            </p>
        </div>
    )
}

export default RQNavBar