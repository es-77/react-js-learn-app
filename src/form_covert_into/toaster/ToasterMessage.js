import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// position example
// "top-left"
// "top-right"
// "top-center"
// "bottom-left"
// "bottom-right"
// "bottom-center"
// type 
// "info"
// "success"
// "warning"
// "error"
// "default"
// autoClose
// 500
// theem 
// "light"
// "dark"
// "colored"
function ToasterMessage({ toasterMessage, toasterPosition, toasterType, toasterAutoClose = 500, toasterTheme, isHideProgressBar = false }) {
    const message = toasterMessage || "Wow so easy!";
    const theme = toasterTheme || "dark";

    const notify = (type) => {
        switch (type) {
            case 'info':
                toast.info(message, { position: toasterPosition || "bottom-center" });
                break;
            case 'success':
                toast.success(message, { position: toasterPosition || "bottom-center" });
                break;
            case 'warning':
                toast.warning(message, { position: toasterPosition || "bottom-center" });
                break;
            case 'error':
                toast.error(message, { position: toasterPosition || "bottom-center" });
                break;
            case 'default':
                toast(message, { position: toasterPosition || "bottom-center" });
                break;
            default:
                break;
        }
    };

    return (
        <>
            <ToastContainer position={toasterPosition || "bottom-center"} autoClose={toasterAutoClose ?? false} theme={theme} hideProgressBar={isHideProgressBar} />
            <button onClick={() => notify(toasterType ?? 'success')}>open</button>
        </>
    );
}

export default ToasterMessage;
