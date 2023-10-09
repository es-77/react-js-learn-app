import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const getProductslike = (search, likeBy) => {
    console.log(search, likeBy);
    return axios.get(`http://localhost:4000/products?${likeBy}_like=^${search}`);
}
function LikeOperator() {
    const [search, setSearch] = useState('a');
    const [likeBy, setLikeBy] = useState('name');

    const { data } = useQuery(['get-product-by-order', search, likeBy], () => getProductslike(search, likeBy))
    console.log(">>>>>>>>>", data)
    return (
        <div>LikeOperator
            <br />
            <input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <br />
            <select name="sort_by" id="sort_by" value={likeBy} onChange={(e) => setLikeBy(e.target.value)}>
                <option value="">Select</option>
                <option value="id"> id</option>
                <option value="name"> name</option>
                <option value="price"> price</option>
                <option value="category"> category</option>
                <option value="description"> description</option>
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

export default LikeOperator