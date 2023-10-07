import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroByQuery } from './hooks/useSuperHeroByQuery';
function SingleSuperHero() {
    const param = useParams();
    const { isLoading, isError, error, data } = useSuperHeroByQuery(param?.id);
    if (isLoading) {
        return <p>loadding...</p>
    }
    if (isError) {
        return <p>{error?.message}</p>
    }
    return (
        <div>SingleSuperHero
            <br />
            <p>name is : </p>
            {data.data?.name}
        </div>
    )
}

export default SingleSuperHero