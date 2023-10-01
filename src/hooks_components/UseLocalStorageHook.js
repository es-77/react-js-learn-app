import React, { useState } from 'react'
import useLocalStorage from '../components/custom_hooks/useLocalStorage';

export default function UseLocalStorageHook() {
    const [name, setName] = useLocalStorage('name', 'emmanuel');

    const handletext = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }

    console.log('name', name);
    return (
        <div>
            UseLocalStorageHook
            <br />
            <input type="text" name="name" id="name" value={name} onChange={(e) => handletext(e)} />

        </div>
    )
}
