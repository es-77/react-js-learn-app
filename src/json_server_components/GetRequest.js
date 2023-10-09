import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';
const getProducts = () => {
    return axios.get('http://localhost:4000/products');
}
function GetRequest() {
    const { data } = useQuery('get-product', getProducts)
    console.log(">>>>>>>>>", data)
    return (
        <div>GetRequest
            <br />
            {data.data.map((product) => {
                return <div key={product?.id}>
                    <span><b>name</b> :  {product?.name} : </span> <span><b>price</b> :  {product?.price}</span>
                </div>
            })}
        </div>
    )
}

export default GetRequest