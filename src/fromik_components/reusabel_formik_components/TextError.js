import React from 'react'

function TextError(props) {
    console.log(props);
    return (
        <div className='error-message' style={{ color: 'red' }}>
            {props.children}
        </div>
    )
}

export default TextError