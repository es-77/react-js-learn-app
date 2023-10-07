import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useSaveSuperHero } from './hooks/useSaveSuperHero';

const getHeros = () => {
    return axios.get('http://localhost:4000/superheroes');
}
function DataSubmit() {
    const { isLoading, data } = useQuery('my-herors-data', getHeros);
    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const { mutate: heroSave } = useSaveSuperHero()
    const handleSubmit = () => {
        console.log(name, last)
        heroSave({ name });
    }
    if (isLoading) {
        return <p>loading ...</p>
    }
    console.log(data)
    return (
        <div>DataSubmit

            <br />
            <form >
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="text" name="last" id="last" value={last} onChange={(e) => setLast(e.target.value)} />
                <br />
                <button type='button' onClick={handleSubmit}>save </button>
            </form>

            <div>
                {data?.data?.map((hero) => {
                    return <p key={hero?.id}>{hero?.name}</p>
                })}
            </div>
        </div>
    )
}

export default DataSubmit