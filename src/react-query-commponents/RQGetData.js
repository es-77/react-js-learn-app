import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
function RQGetData() {
    const { isLoading, data, isError, error } = useQuery('heror-data', () => {
        return axios.get('http://localhost:4000/superheroes')
        // return axios.get('http://localhost:4000/superheroes1')

    },
        // if add defualt time is 5 
        {
            // cacheTime: 5000, // cache time set
            // staleTime: 30000, // defualt value is 0  set time when request send
            // refetchOnMount: true // defualt value is true
            refetchOnWindowFocus: true
        }
    )
    console.log(isLoading, data);
    if (isError) {
        console.log(error.message);
        return <p>{error.message}</p>
    }
    return (
        <div>RQGetData
            <br />
            {isLoading ? <p>loading...</p> : data.data.map((hero) => {
                return <p key={hero.id}>{hero.name}</p>
            })}

        </div>
    )
}

export default RQGetData