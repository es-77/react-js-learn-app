import { useFormik } from 'formik';
import React from 'react';

function FormikInitialValuePage() {
    const formik = useFormik({
        initialValues: {
            name: 'test',
            email: 'test',
            channel: 'ste'
        },
        onSubmit: values => {
            console.log('Form values submitted:', values);
        },
    });

    console.log('>>>>>>>>>>>>>>>>>>', formik.values);
    return (
        <div>
            <h6>FormikUseHook console log 123123</h6>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <br />

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <br />

                <label htmlFor="channel">Channel:</label>
                <input
                    type="text"
                    id="channel"
                    name="channel"
                    value={formik.values.channel}
                    onChange={formik.handleChange}
                />
                <br />

                <button type="submit">Save Data</button>
            </form>
        </div>
    );
}

export default FormikInitialValuePage;
