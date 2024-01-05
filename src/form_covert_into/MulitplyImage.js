import { Avatar, ListItem, Stack } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

function MultiplyImage({ formik, imageStyle = '', multiple = false }) {
    const fileRef = useRef(null);
    const [preview, setPreview] = useState([]);

    useEffect(() => {
        const formikImages = formik.values.image;

        if (!formikImages || formikImages.length === 0) {
            setPreview([]);
            return;
        }

        const objectUrls = formikImages.map((image) => URL.createObjectURL(image));
        setPreview((prevValue) => [...prevValue, ...objectUrls]);

        return () => {
            objectUrls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [formik.values.image]);


    const handleChangeIcon = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }

        const filesArray = Array.from(e.target.files);

        formik.setFieldValue('image', [...formik.values.image, ...filesArray]);
    };

    const handleRemoveFile = (index) => {
        alert(index)
        let image = preview?.filter((item, imageIndex) => imageIndex !== index)
        setPreview(image)
        let formikImageValues = formik?.values?.image?.filter((item, imageIndex) => imageIndex !== index)
        console.log('formik.values.image', formikImageValues)
        formik.setFieldValue('image', formikImageValues);
        console.log('formik.values.image after', formikImageValues)
    }


    return (
        <>
            <Stack space={3}>
                <ListItem >
                    {preview?.map((item, index) => {
                        return (
                            <Avatar
                                onClick={() => handleRemoveFile(index)}
                                alt="Users image"
                                src={item}
                                sx={imageStyle}
                            />
                        )
                    })}
                </ListItem>
            </Stack>
            <input ref={fileRef} onChange={handleChangeIcon} multiple={multiple} type="file" accept="image/*" />
        </>
    )
}

export default MultiplyImage;
