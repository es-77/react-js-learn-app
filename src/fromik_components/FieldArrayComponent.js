import { ErrorMessage, Field, Formik, Form, FieldArray } from 'formik';
import React from 'react'
import * as Yup from 'yup';

function FieldArrayComponent() {
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
        },
        phoneNumbers: ['', ''],
        listPhone: ['']
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
                            <label htmlFor="phoneNumbers">phoneNumbers two:</label>
                            <Field
                                type="text"
                                name='phoneNumbers[1]'
                                id="phoneNumbers"
                            />
                            <ErrorMessage name="phoneNumbers" />
                        </div>
                        <br />
                        <div className="form-control">
                            <label htmlFor="listPhone">listPhone</label>
                            <FieldArray
                                type="text"
                                name='listPhone'
                                id="listPhone"
                            >
                                {
                                    (arrayProps) => {

                                        const { push, remove, form } = arrayProps;
                                        const { values } = form;
                                        const { listPhone } = values;
                                        return <div>
                                            {listPhone.map((phone, index) => {
                                                return <div key={index}>
                                                    <Field name={`listPhone${index}`} />
                                                    <button type='button' onClick={() => push('')}>+</button>
                                                    <button disabled={index === 0} type='button' onClick={() => remove(index)}>-</button>
                                                </div>
                                            })}
                                        </div>
                                    }
                                }
                            </FieldArray>
                            <ErrorMessage name="listPhone" />
                        </div>
                        <br />

                        <button type="submit">Save Data</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FieldArrayComponent