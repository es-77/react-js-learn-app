import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function SelectComponent(props) {
    const { name, id, lable, options } = props

    return (
        <>
            <div>
                <label htmlFor={name}>{lable}</label>
                <Field name={name} id={id} as="select">
                    <option value='' > select one</option>
                    {options.map((option, index) => (
                        <option key={option?.id} value={option?.value}>{option?.lable}</option>
                    ))}
                </Field>
                <ErrorMessage name={name} component={TextError} />
            </div>
        </>
    )
}

export default SelectComponent
