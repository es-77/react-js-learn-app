import React from 'react'
import FormModelHighOrder from './FormModelHighOrder'
import { Button, Typography } from '@mui/material'

function FormModelTemplate(props) {
    const { handleOpen, handleClose } = props;
    return (
        <div>
            <Button onClick={() => handleClose()}>close</Button>
            <Button onClick={() => handleOpen()}>handleOpen</Button>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </div>
    )
}

export default FormModelHighOrder(FormModelTemplate)