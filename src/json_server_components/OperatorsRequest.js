import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const getProductsByOrder = (greater, less) => {
    console.log(greater, less);
    return axios.get(`http://localhost:4000/products?price_gte=${greater}&price_lte=${less}`);
}
function OperatorsRequest() {
    const [greater, setGreater] = useState(1)
    const [less, setLess] = useState(1)
    const { data } = useQuery(['get-product-by-operator', greater, less], () => getProductsByOrder(greater, less))
    return (
        <div>OperatorsRequest
            <br />
            <label htmlFor="price_gte">Price is Greater then or Equal</label>
            <select name="price_gte" id="price_gte" onChange={(e) => setGreater(e.target.value)}>
                <option value="">Select</option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
            </select>
            <br />
            <label htmlFor="price_lte"> Price is Less then or Equal</label>
            <select name="price_lte" id="price_lte" onChange={(e) => setLess(e.target.value)}>
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

export default OperatorsRequest