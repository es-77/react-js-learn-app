import React from 'react'
import { Form, Formik } from 'formik'
import FormikControllComponents from './FormikControllComponents';
import ButtonComponent from './ButtonComponent';
function FormikContainer({ initialValues, validationSchema, formFields, buttonData, onSubmit }) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    {formFields?.map((form) => {
                        return < FormikControllComponents control={form.control} name={form.name} id={form.id} type={form.type} lable={form.lable} />
                    })}
                    {buttonData?.map((button) => {
                        return <ButtonComponent button={button} />
                    })}
                </Form>
            )}

        </Formik>
    )
}

export default FormikContainer