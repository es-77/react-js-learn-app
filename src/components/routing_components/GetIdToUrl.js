import React from 'react'
import { useParams } from 'react-router-dom'

function GetIdToUrl() {
    const param = useParams();
    console.log(param);
    return (
        <div>GetIdToUrl <br />
            the url id is : {param?.id}
        </div>
    )
}

export default GetIdToUrl