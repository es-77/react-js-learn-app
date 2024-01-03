import { Avatar } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

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
    const updatedPreview = [...preview];
    const removedImage = updatedPreview.splice(index, 1)[0];

    // Revoke the URL of the removed image
    URL.revokeObjectURL(removedImage);

    // Update the state with the modified preview array
    // setPreview(updatedPreview);

    // Update formik.values.image by removing the corresponding image
    // const updatedImages = formik.values.image.filter((image, i) => i !== index);
    // formik.setFieldValue('image', updatedImages);
  };

  return (
    <>
      {preview.map((url, index) => (
        <Avatar
          key={index}
          alt="Users image"
          src={url}
          sx={imageStyle}
          onClick={() => handleRemoveFile(index)}
        />
      ))}
      <input
        ref={fileRef}
        onChange={handleChangeIcon}
        multiple={multiple}
        type="file"
        accept="image/*"
        // hidden
      />
    </>
  );
}

export default MultiplyImage;
