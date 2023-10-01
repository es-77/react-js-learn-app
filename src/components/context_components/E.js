import React, { useContext } from 'react'
import { firstName, lastName } from './A'

export default function E() {
    const name = useContext(firstName)
    const fatherName = useContext(lastName);
    return (
        <div>
            E
            <br />
            first name {name} --- last name {fatherName}
        </div>
    )
}
