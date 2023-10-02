import React from 'react'
import { useLocation } from 'react-router-dom'

function ContactPage() {
    const location = useLocation();
    return (
        <div>ContactPage
            <br />
            {location?.state.name}
        </div>
    )
}

export default ContactPage