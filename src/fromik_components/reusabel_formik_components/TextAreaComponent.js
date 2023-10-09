import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function TextAreaComponent(props) {
    const { name, id, lable } = props
    console.log(name, id, lable)
    return (
        <div>
            <lable htmlFor={name}>{lable}</lable>
            <Field name={name} id={id} as="textarea" />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default TextAreaComponent