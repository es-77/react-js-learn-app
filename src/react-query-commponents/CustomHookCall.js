import React from 'react'
import { useSuperHeroDataFetch } from './hooks/useSuperHeroDataFetch'
import { Link } from 'react-router-dom'
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
            also use send id
            <br />
            {data?.data?.map((hero) => {
                return <Link to={`/qr-query-by-id/${hero?.id}`}><p key={hero?.id}>{hero?.name}</p></Link>
            })}
        </div>
    )
}

export default CustomHookCall