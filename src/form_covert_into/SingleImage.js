import { Avatar, Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

export default function SingleImage({ formik, image }) {

    const fileRef = useRef(null);

    const [preview, setPreview] = useState(image);


    useEffect(() => {
        const image = formik.values.image;
        console.log("image", image)
        if (!image || image === '') {
            if (!image) {
                setPreview(undefined);
            }

            return;
        }
        const objectUrl = URL.createObjectURL(image);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [formik.values.image]);

    useEffect(() => {
        setPreview(image)
    }, [image])


    const handleChangeIcon = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }

        const file = e.target.files[0];
        formik.setFieldValue('image', file);
    };
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Avatar
                    onClick={() => fileRef.current.click()}
                    alt="Users image"
                    src={preview}
                    sx={{ width: 130, height: 130, cursor: 'pointer' }}
                />
            </Grid>
            <input ref={fileRef} onChange={handleChangeIcon} multiple={true} type="file" accept="image/*" hidden style={{ display: 'none' }} />
        </>
    )
}
