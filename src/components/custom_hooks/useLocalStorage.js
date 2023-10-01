import React, { useEffect, useState } from 'react'

const getItem = (key, value) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    console.log('savedValue', savedValue, 'value === savedValue :', value === savedValue);
    if (value === savedValue) {
        return savedValue;
    } else {
        return value;
    }
    // return savedValue ?? value;
}

function useLocalStorage(key, value) {
    const [updateValue, setUpdateValue] = useState(() => {
        return getItem(key, value);
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [updateValue])

    // console.log(updateValue, 'updateValue');
    return [updateValue, setUpdateValue];

}

export default useLocalStorage