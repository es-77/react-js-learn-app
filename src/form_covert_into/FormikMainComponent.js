import React from 'react'
import FormFormiTemplate from './FormFormiTemplate'
import UserValidation from './validation/UserValidation';
import UserInitialValue from './initialValues/UserInitialValue';
import ToasterMessage from './toaster/ToasterMessage';

function FormikMainComponent() {

    const validationSchema = UserValidation();
    const InitialValues = UserInitialValue({ id: 'id' });

    const handleFormikSubmit = (data) => {
        console.log('handleFormikSubmit data', data)

    }
    return (
        <>
            <FormFormiTemplate validationSchema={validationSchema} InitialValues={InitialValues} handleFormikSubmit={handleFormikSubmit} />
            <ToasterMessage data={{ id: 'id' }} />

        </>
    )
}

export default FormikMainComponent
