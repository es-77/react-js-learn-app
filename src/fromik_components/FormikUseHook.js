import { useFormik } from 'formik'
import React from 'react'

function FormikUseHook() {

    const formik = useFormik({})
    const handleSubmit = () => {
        console.log('name, email, channel')
    }
    return (
        <div>FormikUseHook 123
            <br />
            <form>

                <br />
                <input type="text" name="name" id="name" />
                <br />
                <input type="text" name="email" id="email" />
                <br />
                <input type="text" name="channel" id="channel" />
                <br />
                <button type='button' onClick={handleSubmit}>Save Data</button>
            </form>
        </div>
    )
}

export default FormikUseHook