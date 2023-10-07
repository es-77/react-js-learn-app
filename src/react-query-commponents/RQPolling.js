import React from 'react'
import axios from "axios"
import { useQuery } from "react-query"

function RQPolling() {
    const { isLoading, isError, error, isFetching, data } = useQuery('my-hero', () => {
        return axios.get('http://localhost:4000/superheroes')
    },
        {
            refetchInterval: 2000,  // fetch data on every 2s delay if focus out it not fetch data
            refetchIntervalInBackground: true
        }
    )
    if (isLoading) {
        return <p>loading ....</p>
    }
    if (isError) {
        return <p>{error.message}</p>
    }
    return (
        <div>RQPolling
            <br />
            {data?.data?.map((hero) => {
                return <p key={hero?.id}>{hero?.name}</p>
            })}

        </div>
    )
}

export default RQPolling