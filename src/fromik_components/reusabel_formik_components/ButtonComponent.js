import React from 'react'

function ButtonComponent(props) {
    const { button } = props;
    const { id, lable, type } = button;
    return (
        <div>
            <button type={type} id={id}>{lable}</button>
        </div>
    )
}

export default ButtonComponent