import React from 'react'
import FormikContainer from './reusabel_formik_components/FormikContainer'
import * as Yup from 'yup';
function CallReusableFormikComponent() {
    const initialValues = {
        name: '',
        email: ""
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('name is requird'),
        email: Yup.string().email('invalid').required('email is requird')
    });

    const formFields = [
        {
            control: "input",
            name: 'name',
            id: 'name',
            type: "text",
            lable: "name"
        },
        {
            control: "input",
            name: 'password',
            id: 'password',
            type: "password",
            lable: "Enter Password"
        },
        {
            control: "input",
            name: 'email',
            id: 'email',
            type: "email",
            lable: "Enter your Email"
        }
    ];
    const buttonData = [
        {
            'id': 'save',
            "lable": "Save Form",
            'type': "submit"
        },
        {
            'id': 'reset',
            "lable": "Reset Form",
            'type': "reset"
        },
    ]

    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <div>CallReusableFormikComponent
            <br />
            <FormikContainer initialValues={initialValues} validationSchema={validationSchema} formFields={formFields} buttonData={buttonData} onSubmit={onSubmit} />
        </div>
    )
}

export default CallReusableFormikComponent