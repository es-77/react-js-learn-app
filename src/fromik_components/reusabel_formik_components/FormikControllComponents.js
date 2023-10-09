import React from 'react'
import InputComponent from './InputComponent';
import TextAreaComponent from './TextAreaComponent';
import SelectComponent from './SelectComponent';
import RadioButtonComponent from './RadioButtonComponent';
import CheckBoxComponent from './CheckBoxComponent';
import DatePicker from './DatePicker';

function FormikControllComponents(props) {
    const { control } = props;
    switch (control) {
        case 'input':
            return <InputComponent {...props} />
        case 'textarea':
            return <TextAreaComponent {...props} />
        case 'select':
            return <SelectComponent {...props} />
        case 'radio':
            return <RadioButtonComponent {...props} />
        case 'checkbox':
            return <CheckBoxComponent {...props} />
        case 'date_picker':
            return <DatePicker {...props} />
        default:
            return null
    }
}

export default FormikControllComponents