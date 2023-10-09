import React from 'react'
import InputComponent from './InputComponent';
import TextAreaComponent from './TextAreaComponent';
import SelectComponent from './SelectComponent';

function FormikControllComponents(props) {
    const { control } = props;
    switch (control) {
        case 'input':
            return <InputComponent {...props} />
        case 'textarea':
            return <TextAreaComponent {...props} />
        case 'select':
            return <SelectComponent {...props} />
        default:
            return null
    }
}

export default FormikControllComponents