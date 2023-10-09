import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const getProductsByOrder = (limit, page) => {
    console.log(limit, page);
    return axios.get(`http://localhost:4000/products?_limit=${limit}&_page=${page}`);
}
function PaginationRequest() {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(1)
    const { data } = useQuery(['get-product-by-pagations', page, limit], () => getProductsByOrder(limit, page))
    return (
        <div>PaginationRequest
            <br />
            <label htmlFor="limit">LIMIT </label>
            <select name="limit" id="limit" onChange={(e) => setLimit(e.target.value)}>
                <option value="">Select</option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
            </select>
            <br />
            <label htmlFor="page"> Page</label>
            <select name="page" id="page" onChange={(e) => setPage(e.target.value)}>
                <option value="">Select</option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
            </select>
            <br />
            {data?.data?.map((product) => {
                return <div key={product?.id}>
                    <span><b>name</b> :  {product?.name} : </span> <span><b>price</b> :  {product?.price}</span>
                </div>
            })}
        </div>
    )
}

export default PaginationRequest