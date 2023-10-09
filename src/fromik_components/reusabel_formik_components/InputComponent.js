import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function InputComponent(props) {
    const { name, id, type, lable } = props
    return (
        <div>
            <lable htmlFor={name}>{lable}</lable>
            <Field name={name} id={id} type={type} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default InputComponent