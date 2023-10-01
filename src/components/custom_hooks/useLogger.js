import React, { useEffect } from 'react'

function useLogger(value) {
    useEffect(() => {
        console.log(value);
    }, [value])
}

export default useLogger