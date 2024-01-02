import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// material
import {
    TextField,
    FormControlLabel,
    Switch,
    Box,
    Grid,
    InputAdornment,
    IconButton,
    Avatar,
    Typography,
    Button,
} from '@mui/material';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSaveFormData } from '../form_covert_into_api/FormDataCovertApi';
import MakeFormData from '../utils/MakeFormData';
import ConsoleLog from '../utils/ConsoleLog';
import SingleImage from './SingleImage';
import DataModifying from '../utils/DataModifying';
import MulitplyImage from './MulitplyImage';


export default function AdminForm() {
    const location = useLocation();
    const user = location.state?.user;

    const imageStyle = {
        width: 130, height: 130, cursor: 'pointer'
    }

    const formDataQuery = useSaveFormData();

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    // const navigate = useNavigate();

    const ProductSchema = Yup.object()
        .shape({
            name: Yup.string().lowercase().required(),
            phone: Yup.number().default(0).required(),
        })
        .when((values, ProductSchema) => {
            if (user?.id > 0 ? 0 : 1) {
                return ProductSchema.shape({
                    password: Yup.string().required('Password is required').min(6),
                });
            }
        });

    const formik = useFormik({
        initialValues: {
            admin_id: user?.id || '123',
            name: user?.name || '123',
            phone: user?.phone || '123',
            address: user?.phone || '123',
            image: '',
            images: [
                1,
                2,
                3
            ],
            email: user?.email || '',
            password: '',
            active: user?.active || false,
            objectData: [
                {
                    name: 1,
                    email: 1,
                    address: 1,
                    phone: 1,
                },
                {
                    name: 2,
                    email: 2,
                    address: 2,
                    phone: 2,
                },
                {
                    name: 2,
                    email: 2,
                    address: 2,
                    phone: 2,
                }
            ]
        },
        validationSchema: ProductSchema,
        onSubmit: (data) => {
            // const skipKeyArray = ["image", 'admin_id', 'name', 'phone', 'address'];
            const emptyKeyValueSkip = false;
            const skipKeyArray = [];
            const modifiedData = { ...data };
            modifiedData.active = modifiedData.active ? 1 : 0;
            formDataQuery.mutate(MakeFormData(modifiedData, skipKeyArray, emptyKeyValueSkip));
        },
    });

    useEffect(() => {
        const data = formDataQuery?.data;
        // alert()
        console.log('%c data here ', formDataQuery, 'color:red')
        toast.success('message');

        if (formDataQuery.isSuccess) {
            const message = data?.message;
            const validationErrors = data?.validation_errors;
            const response = data?.response;
            if (response === 101) {
                setTimeout(() => {
                    // navigate('/dashboard/admin');
                }, 2000);
            } else {
                Object.keys(validationErrors).forEach((key) => {
                    toast.error(validationErrors[key][0]);
                });
            }
            setSubmitting(false);
        }

        if (formDataQuery.isError) {
            setSubmitting(false);
            const message = 'Error occurred while saving the data';
            toast.error(message);
        }
    }, [formDataQuery.isSuccess, formDataQuery.isError]);

    // const [preview, setPreview] = useState(user?.photo);

    // useEffect(() => {
    //     const image = formik.values.image;
    //     if (!image || image === '') {
    //         if (!user?.photo) {
    //             setPreview(undefined);
    //         }

    //         return;
    //     }

    //     const objectUrl = URL.createObjectURL(image);
    //     setPreview(objectUrl);
    //     return () => URL.revokeObjectURL(objectUrl);
    // }, [formik.values.image]);


    // const handleChangeIcon = (e) => {
    //     if (!e.target.files || e.target.files.length === 0) {
    //         return;
    //     }

    //     const file = e.target.files[0];
    //     formik.setFieldValue('image', file);
    // };



    // const handleChangeIcon = (e) => {
    //     if (!e.target.files || e.target.files.length === 0) {
    //         return;
    //     }

    //     const filesArray = Array.from(e.target.files);

    //     formik.setFieldValue('image', [...formik.values.image, ...filesArray]);
    // };

    // useEffect(() => {
    //     const images = formik.values.image;

    //     if (!images || images.length === 0) {
    //         if (!user?.photo) {
    //             setPreview(undefined);
    //         }

    //         return;
    //     }

    //     const objectUrls = images.map((image) => URL.createObjectURL(image));
    //     setPreview(objectUrls);

    //     return () => {
    //         objectUrls.forEach((url) => URL.revokeObjectURL(url));
    //     };
    // }, [formik.values.image]);


    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps, setSubmitting, submitForm } = formik;

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" encType="multipart/form-data" onSubmit={handleSubmit}>
                <Grid container spacing={4} my={3} px={7} justifyContent="flex-end">
                    <Grid item md={12} xs={12}>
                        <MulitplyImage formik={formik} images={['https://stage-api.nemtnextgen.com/storage/driver/attachments/GvKWEz5p2znznY8drEW6g90QI0GTcyyUNahtIofe.png']} imageStyle={imageStyle} multiple={true} />
                    </Grid>
                    {/* <Grid item md={12} xs={12}>
                        <SingleImage formik={formik} image={'https://stage-api.nemtnextgen.com/storage/driver/attachments/GvKWEz5p2znznY8drEW6g90QI0GTcyyUNahtIofe.png'} imageStyle={imageStyle} />
                    </Grid> */}
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

                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            autoComplete="current-password"
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            {...getFieldProps('password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleShowPassword} edge="end">
                                            {/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            error={Boolean(touched.password && errors.password)}
                            helperText={touched.password && errors.password}
                        />
                        {user?.phone || user?.email ? (
                            <Typography component="span" style={{ color: '#2065d1', fontSize: 13 }}>
                                Enter Your New Password If You Want To Change
                            </Typography>
                        ) : null}
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={formik.values.active}
                                    onChange={(e) => formik.setFieldValue('active', e.target.checked)}
                                />
                            }
                            label="Active"
                        />
                    </Grid>
                    <Grid item md={6} xs={12} />
                    <Grid item md={12}>
                        <Box display="flex" justifyContent="flex-end">
                            <Button size="large" type="submit" variant="contained" loading={isSubmitting}>
                                {!user?.id ? 'Save Details' : 'Update Details'}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Form>
        </FormikProvider>
    );
}

AdminForm.propTypes = {};
