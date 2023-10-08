import React from 'react'
import { Link } from 'react-router-dom'

function MainBar() {
    return (
        <div>
            <Link to='/simple-form'>Simple Form </Link>
            <Link to='/use-formik'> | Use Formik </Link>
            <Link to='/use-formik-initial-value'> | Formik Initial Value </Link>
            <Link to='/use-formik-error'> | Formik Error </Link>
            <Link to='/use-formik-yup-error'> | Formik yup Error </Link>
            <Link to='/use-formik-reducing-code'> | Formik Reducing Code </Link>
            <Link to='/use-formik-formik-component'> | Formik Component </Link>
        </div>
    )
}

export default MainBar