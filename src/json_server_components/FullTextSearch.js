import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const getProductsFullTextSearch = (search) => {
    console.log(search);
    return axios.get(`http://localhost:4000/products?q=${search}`);
}
function FullTextSearch() {
    const [search, setSearch] = useState('a');
    const { data } = useQuery(['get-product-by-full-text', search], () => getProductsFullTextSearch(search))
    console.log(">>>>>>>>>", data)
    return (
        <div>FullTextSearch
            <br />
            <input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <br />
            <br />
            {data?.data?.map((product) => {
                return <div key={product?.id}>
                    <span><b>name</b> :  {product?.name} : </span> <span><b>price</b> :  {product?.price}</span>
                </div>
            })}
        </div>
    )
}

export default FullTextSearch