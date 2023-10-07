import React from 'react'
import { useQueries } from 'react-query'
import axios from 'axios'
const getHeroById = () => {
    return axios.get('http://localhost:4000/superheroes');
}
function DynamicQuery({ herorIds }) {
    const result = useQueries(herorIds.map((id) => {
        return {
            queryKey: ['dynamic' + id],
            queryFn: () => getHeroById(id)
        }
    }))
    console.log(herorIds, { result });

    return (
        <div>DynamicQuery</div>
    )
}

export default DynamicQuery