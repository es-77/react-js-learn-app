import React from 'react'
import { useSuperHeroDataFetch } from './hooks/useSuperHeroDataFetch'

function CustomHookCall() {
    const onSuccess = () => {
        console.log('data fetch');
    }
    const onError = () => {
        console.log('data fetch');
    }
    const { isError, isFetching, isLoading, data, error } = useSuperHeroDataFetch(onSuccess, onError)
    if (isLoading) {
        return <p>loading .... </p>
    }
    if (isError) {
        return <p>{error.message}</p>
    }
    return (
        <div>CustomHookCall
            <br />
            {data?.data?.map((hero) => {
                return <p key={hero?.id}>{hero?.name}</p>
            })}
        </div>
    )
}

export default CustomHookCall