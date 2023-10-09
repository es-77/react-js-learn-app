import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'

function LoadSavedDataOnButton() {
    const ProductSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
    });

    const onSubmit = (values, onSumbiteProps) => {
        console.log('Form values submitted:', values, onSumbiteProps);
        onSumbiteProps.setSubmitting(false);
    }

    const initialValues = {
        name: '',
        email: ''
    }
    const savedValues = {
        name: 'Emmanuel saleem',
        email: 'EmmanuelSaleem@my.com'
    }
    const vaiidateName = values => {
        let error
        if (!values) {
            return error = "required";

        }
        return error;
    }

    const [saveFormValue, setSaveFormValue] = useState(null)

    return (
        <div>
            <Formik
                initialValues={saveFormValue || initialValues}
                validationSchema={ProductSchema}
                onSubmit={onSubmit}
                enableReinitialize
            >
                {formik => (
                    <Form>
                        <h6>
                            Formik error messages through Yup
                        </h6>
                        <div className="form-control">
                            <label htmlFor="name">Name:</label>
                            <Field
                                type="text"
                                name='name'
                                id="name"
                                validate={vaiidateName}
                            />
                            <ErrorMessage name='name' />
                        </div>
                        <br />
                        <div className="form-control">
                            <label htmlFor="email">Email:</label>
                            <Field
                                type="text"
                                name="email"
                                id="email"
                            />
                            <ErrorMessage name="email" />
                        </div>

                        <br />
                        <button type="submit" disabled={!(formik.isValid) || formik.isSubmitting}>Save Data</button>
                        <button onClick={() => setSaveFormValue(savedValues)}>Load data</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoadSavedDataOnButton