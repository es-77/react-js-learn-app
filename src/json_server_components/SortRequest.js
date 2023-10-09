import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const getProductsByOrder = (order, sortBy) => {
    return axios.get(`http://localhost:4000/products?_sort=${sortBy}&_order=${order}`);
}
function SortRequest() {
    const [order, setOrder] = useState('asc')
    const [sortBy, setSortBy] = useState('id')
    const { data } = useQuery(['get-product-by-order', order, sortBy], () => getProductsByOrder(order, sortBy))
    console.log(">>>>>>>>>", data)
    return (
        <div>SortRequest
            <br />
            <select name="sort_by" id="sort_by" onChange={(e) => setSortBy(e.target.value)}>
                <option value="">Select</option>
                <option value="id"> id</option>
                <option value="name"> name</option>
                <option value="price"> price</option>
                <option value="category"> category</option>
                <option value="description"> description</option>
            </select>
            <br />
            <select name="order" id="order" onChange={(e) => setOrder(e.target.value)}>
                <option value="">Select</option>
                <option value="asc">ASC order</option>
                <option value="desc">Desc order</option>
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

export default SortRequest