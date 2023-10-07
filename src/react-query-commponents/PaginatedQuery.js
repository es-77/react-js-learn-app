import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const getColours = (pageNum, limit) => {
    return axios.get(`http://localhost:4000/colors?_limit=${limit}&_page=${pageNum}`);
}
function PaginatedQuery() {
    const [pageNumber, setPageNumber] = useState(1);
    const [limit, setLimit] = useState(1);
    const { data, isLoading } = useQuery(['color-name', pageNumber, limit], () => getColours(pageNumber, limit))
    console.log(data?.data.length);

    if (isLoading) {
        return <p>loading ... </p>
    }

    return (
        <div>PaginatedQuery
            <br />
            <select name="page" id="page" onChange={(e) => setLimit(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <br />
            {data?.data.map((color) => {
                return <p key={color?.id}>{color?.label}</p>
            })}
            <div>
                <button onClick={() => setPageNumber(prevPage => prevPage + 1)}> next button</button>
                <br />
                <button onClick={() => setPageNumber(prevPage => prevPage - 1)} disabled={pageNumber === 1}> prev button</button>
            </div>
        </div>
    )
}

export default PaginatedQuery