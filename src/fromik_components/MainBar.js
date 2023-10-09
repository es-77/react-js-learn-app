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
            <Link to='/use-formik-nested-object'> | Formik Nested Object </Link>
            <Link to='/use-formik-array-field'> | Formik Array Field </Link>
            <Link to='/use-formik-field-level-validation'> | Formik Field Level Validation </Link>
            <Link to='/use-formik-manually-trigering-validation'> | Formik Manually Trigering Validation </Link>
            <Link to='/use-formik-disable-submit'> | Formik Disable Submit </Link>
            <Link to='/use-formik-load-save-data-on-button'> | Load Saved Data On Button </Link>
        </div>
    )
}

export default MainBar