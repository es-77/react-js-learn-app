import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
function RQDataTransform() {
    const { isLoading, isError, isFetching, isSuccess, data } = useQuery('data-transform', () => {
        return axios.get('http://localhost:4000/superheroes');
    },
        {
            select: (data) => {
                console.log('asdf', data);
                const heroName = data?.data?.map((hero) => hero?.name)
                return heroName;
            }
        }
    )
    return (
        <div>RQDataTransform
            {data?.map((name, index) => {
                return <p key={index}>{name}</p>
            })}
        </div>
    )
}

export default RQDataTransform