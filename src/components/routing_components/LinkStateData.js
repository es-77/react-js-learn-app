import React from 'react'
import { useLocation } from 'react-router-dom'

function LinkStateData() {
    const location = useLocation();
    return (
        <div>
            LinkStateData
            <br />
            {location?.state?.name} == {location?.state?.father}
        </div>
    )
}

export default LinkStateData