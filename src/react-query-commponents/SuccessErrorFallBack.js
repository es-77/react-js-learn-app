import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query';
function SuccessErrorFallBack() {

    const onSuccess = (data) => {
        return console.log('on success function call', data)
    }
    const onError = (error) => {
        return console.log('on error function call', error)
    }
    const { isLoading, isError, data } = useQuery('success-error', () => {
        // return axios.get('http://localhost:4000/superheroes');
        return axios.get('http://localhost:4000/superheroes1');
    },
        {
            onSuccess,
            onError
        }

    )
    return (
        <div>SuccessErrorFallBack
            <br />
            {data?.data?.map((hero) => {
                return <p key={hero?.id}>{hero?.name}</p>
            })}
        </div>
    )
}

export default SuccessErrorFallBack