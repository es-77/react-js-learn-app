import { Avatar, Grid } from '@mui/material';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

const ImageRef = forwardRef(({ props, formik, user }, ref) => {
    const [preview, setPreview] = useState(user?.photo);

    const handleChangeFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }

        const filesArray = Array.from(e.target.files);

        formik.setFieldValue('image', [...formik.values.image, ...filesArray]);
    };

    useEffect(() => {
        const image = formik.values.image;
        if (!image || image === '') {
            if (!user?.photo) {
                setPreview(undefined);
            }
            return;
        }
        const objectUrl = URL.createObjectURL(image);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [formik.values.image]);


    useImperativeHandle(ref, () => ({
        handleChangeFile
    }));




    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Avatar
                    onClick={() => ref.current.click()}
                    alt="Users image"
                    src={preview}
                    sx={{ width: 130, height: 130, cursor: 'pointer' }}
                />
            </Grid>
        </>
    )
});

export default ImageRef