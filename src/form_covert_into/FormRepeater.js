import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import FormRepeaterTemplate from './FormRepeaterTemplate';

function FormRepeater() {

    const formik = useFormik({
        initialValues: {
            friends: [
                {
                    name: '',
                    email: '',
                },
            ],

        },
        onSubmit: (data) => {
            console.log('Data', data)
        },
    });

    const { handleSubmit } = formik;

    const pushValue = { name: '', email: '' }
    return (

        <FormikProvider value={formik}>
            <Form autoComplete="off" encType="multipart/form-data" onSubmit={handleSubmit}>
                <FormRepeaterTemplate fieldNameKey={'friends'} buttonTextShow={'Add New Friend'} formik={formik} pushValue={pushValue} formikValueOfKey={formik?.values?.friends} />
            </Form>
        </FormikProvider>
    );
}

export default FormRepeater;
