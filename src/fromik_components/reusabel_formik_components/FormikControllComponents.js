import React from 'react'
import InputComponent from './InputComponent';

function FormikControllComponents(props) {
    const { control } = props;
    switch (control) {
        case 'input':
            return <InputComponent {...props} />
        default:
            return null
    }
}

export default FormikControllComponents