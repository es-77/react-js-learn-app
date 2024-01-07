import { Box, Button, Grid } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik'
import React from 'react'

const FormikHighOrder = (WrappedComponent) => {
    function FormikHighOrder(props) {
        const { validationSchema, InitialValues, handleFormikSubmit, buttonText, buttonVariant, buttonType, buttonSize } = props

        const formik = useFormik({
            initialValues: InitialValues,
            validationSchema: validationSchema,
            onSubmit: (data) => {
                handleFormikSubmit(data);
            },
        });

        const { handleSubmit } = formik;

        return (
            <>
                <FormikProvider value={formik}>
                    <Form autoComplete="off" encType="multipart/form-data" onSubmit={handleSubmit}>
                        <WrappedComponent {...props} formik={formik} />
                        <Grid item md={6} xs={12}>
                            <Box display="flex" justifyContent="flex-end">
                                <Button size={buttonSize ?? "large"} type={buttonType ?? "submit"} variant={buttonVariant ?? "contained"}>
                                    {buttonText ?? 'Save'}
                                </Button>
                            </Box>
                        </Grid>
                    </Form>
                </FormikProvider>
            </>
        )
    }
    return FormikHighOrder
}

export default FormikHighOrder
