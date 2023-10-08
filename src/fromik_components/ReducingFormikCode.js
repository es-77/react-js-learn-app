import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ReducingFormikCode() {
    const ProductSchema = Yup.object({
        name: Yup.string('Enter valid name').required('Name is required'),
        email: Yup.string('enter valid email').email('Invalid email format').required('Email is required'),
        channel: Yup.string('Enter valid channel name').required('Channel is required')
    });

    const onSubmit = values => {
        console.log('Form values submitted:', values);
    }
    const initialValues = {
        name: '',
        email: '',
        channel: ''
    }


    const formik = useFormik({
        initialValues,
        validationSchema: ProductSchema,
        onSubmit,
    });

    console.log('>>>>>>>>>>>>>>>>>>', formik.errors);
    return (
        <div>
            <h6>
                formik error message throught yuy
            </h6>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        {...formik.getFieldProps('name')}
                    />
                    {formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : null}
                </div>
                <br />
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : null}
                </div>
                <br />
                <div className="form-control">
                    <label htmlFor="channel">Channel:</label>
                    <input
                        type="text"
                        {...formik.getFieldProps('channel')}
                    />
                    {formik.errors.channel && formik.touched.channel ? <p>{formik.errors.channel}</p> : null}
                </div>
                <br />

                <button type="submit">Save Data</button>
            </form>
        </div>
    );
}

export default ReducingFormikCode