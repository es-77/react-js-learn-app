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
        },
        {
            control: "textarea",
            name: 'textarea',
            id: 'textarea',
            lable: "textarea enter "
        },
        {
            control: "select",
            name: 'select_country',
            id: 'select_country',
            lable: "Select Your country",
            options: [
                {
                    id: 'usa',
                    lable: 'USA',
                    value: "usa"
                },
                {
                    id: 'pk',
                    lable: 'PK',
                    value: "pk"
                },
                {
                    id: 'ind',
                    lable: 'Indain',
                    value: "ind"
                }
            ]
        },
        {
            control: "radio",
            name: 'select_gender',
            id: 'select_gender',
            lable: "Select Gender",
            options: [
                {
                    id: 'male',
                    lable: 'Male',
                    value: "male"
                },
                {
                    id: 'female',
                    lable: 'Female',
                    value: "female"
                },
                {
                    id: 'other',
                    lable: 'Other',
                    value: "other"
                }
            ]
        },
        {
            control: "checkbox",
            name: 'course',
            id: 'course',
            lable: "Check Course",
            options: [
                {
                    id: 'eng',
                    lable: 'English',
                    value: "eng"
                },
                {
                    id: 'urd',
                    lable: 'Urdu',
                    value: "urd"
                },
                {
                    id: 'math',
                    lable: 'Math',
                    value: "math"
                }
            ]
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