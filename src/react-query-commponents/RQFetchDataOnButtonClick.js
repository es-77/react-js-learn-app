import React from 'react'
import axios from 'axios'
import { useQuery } from "react-query"
function RQFetchDataOnButtonClick() {
    const { isLoading, isError, error, isFetching, refetch, data } = useQuery('refetch-data', () => {
        return axios.get('http://localhost:4000/superheroes');
    },
        {
            enabled: false, // on component mount not fetch the data
        }
    )
    return (
        <div>RQFetchDataOnButtonClick
            <br />
            <button onClick={refetch}> fetch the data</button>
            <br />
            {data?.data.map((hero) => {
                return <p key={hero?.id}>{hero?.name}</p>
            })}
        </div>
    )
}

export default RQFetchDataOnButtonClick