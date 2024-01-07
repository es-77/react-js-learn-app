import React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const FormModelHighOrder = (WrappedComponent) => {
    function FormModelHighOrder(props) {
        // const { fieldNameKey, } = props

        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        // const fieldName = useMemo(() => {
        //     return fieldNameKey;
        // }, [fieldNameKey])
        return (
            <>
                <div>
                    <Button onClick={handleOpen}>Open modal</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <WrappedComponent {...props} handleOpen={handleOpen} handleClose={handleClose} />
                        </Box>
                    </Modal>
                </div>

            </>
        )
    }
    return FormModelHighOrder
}

export default FormModelHighOrder
