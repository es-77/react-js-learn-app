import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikComponent() {
    const ProductSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        channel: Yup.string().required('Channel is required')
    });

    const onSubmit = values => {
        console.log('Form values submitted:', values);
    }

    const initialValues = {
        name: '',
        email: '',
        channel: ''
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
                        <h6>
                            Formik error messages through Yup
                        </h6>
                        <div className="form-control">
                            <label htmlFor="name">Name:</label>
                            <Field
                                type="text"
                                name='name'
                                id="name"
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
                        <div className="form-control">
                            <label htmlFor="channel">Channel:</label>
                            <Field
                                type="text"
                                name='channel'
                                id="channel"
                            />
                            <ErrorMessage name="channel" />
                        </div>
                        <br />

                        <button type="submit">Save Data</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormikComponent;
