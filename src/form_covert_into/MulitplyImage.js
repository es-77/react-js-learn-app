import { Avatar } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

function MulitplyImage({ formik, image = [], imageStyle = '', multiple = false }) {
    const fileRef = useRef(null);
    const [preview, setPreview] = useState(image);

    useEffect(() => {
        const formikImages = formik.values.image;
        console.log("image", formikImages)
        if (!formikImages || formikImages === '') {
            if (!formikImages) {
                setPreview(undefined);
            }

            return;
        }
        const objectUrls = formikImages.map((image) => URL.createObjectURL(image));
        console.log('objectUrls', objectUrls)
        setPreview(objectUrls);

        return () => {
            objectUrls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [formik.values.image]);

    // useEffect(() => {
    //     setPreview(image)
    // }, [image])


    const handleChangeIcon = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }

        const filesArray = Array.from(e.target.files);

        formik.setFieldValue('image', [...formik.values.image, ...filesArray]);
    };

    return (
        <>
            <Avatar
                onClick={() => fileRef.current.click()}
                alt="Users image"
                src={preview}
                sx={imageStyle}
            />
            <input ref={fileRef} onChange={handleChangeIcon} multiple={multiple} type="file" accept="image/*" hidden style={{ display: 'none' }} />
        </>
    )
}

export default MulitplyImage