import React from 'react'
import { Link } from 'react-router-dom'

function MainBar() {
    return (
        <div>
            <Link to='/simple-form'>Simple Form </Link>
            <Link to='/use-formik'> | Use Formik </Link>
            <Link to='/use-formik-initial-value'> | Formik Initial Value </Link>
            <Link to='/use-formik-error'> | Formik Error </Link>
        </div>
    )
}

export default MainBar