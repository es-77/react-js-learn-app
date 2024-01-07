import React from 'react'
import FormikHighOrder from './FormikHighOrder'
import { Grid, TextField } from '@mui/material'

function FormFormiTemplate(props) {

    const { formik } = props
    const { errors, touched, getFieldProps } = formik;
    return (
        <div>
            <Grid container spacing={4} my={3} px={7} justifyContent="flex-end">
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        required
                        autoComplete="name"
                        label="Name"
                        {...getFieldProps('name')}
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        required
                        autoComplete="address"
                        label="Address"
                        {...getFieldProps('address')}
                        error={Boolean(touched.address && errors.address)}
                        helperText={touched.address && errors.address}
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        required
                        autoComplete="email"
                        label="Email"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default FormikHighOrder(FormFormiTemplate)