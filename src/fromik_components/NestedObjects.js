import React from 'react'
import { ErrorMessage, Form, Formik, Field } from 'formik';
import * as Yup from 'yup'

function NestedObjects() {
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
        channel: '',
        social: {
            facebook: '',
            linkedin: '',
            twitter: '',
            gitHub: ''
        }
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
                        <div className="form-control">
                            <label htmlFor="social.facebook">facebook:</label>
                            <Field
                                type="text"
                                name='social.facebook'
                                id="social.facebook"
                            />
                            <ErrorMessage name="social.facebook" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="social.linkedin">linkedin:</label>
                            <Field
                                type="text"
                                name='social.linkedin'
                                id="social.linkedin"
                            />
                            <ErrorMessage name="social.linkedin" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="social.twitter">twitter:</label>
                            <Field
                                type="text"
                                name='social.twitter'
                                id="social.twitter"
                            />
                            <ErrorMessage name="social.twitter" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="social.gitHub">gitHub:</label>
                            <Field
                                type="text"
                                name='social.gitHub'
                                id="social.gitHub"
                            />
                            <ErrorMessage name="social.gitHub" />
                        </div>
                        <br />

                        <button type="submit">Save Data</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default NestedObjects