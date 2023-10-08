import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

function ManuallyTrigeringValidation() {
    const ProductSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
    });

    const onSubmit = values => {
        console.log('Form values submitted:', values);
    }

    const initialValues = {
        name: '',
        email: ''
    }
    const vaiidateName = values => {
        let error
        if (!values) {
            return error = "required";

        }
        return error;
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={ProductSchema}
                onSubmit={onSubmit}
            >
                {formik => (

                    <Form>
                        {console.log(formik)}
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
                        <button type="button" onClick={() => formik.validateField('name')}>valid only name</button>
                        <button type="button" onClick={() => formik.validateForm()}>valid all form</button>
                        <button type="submit">Save Data</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ManuallyTrigeringValidation