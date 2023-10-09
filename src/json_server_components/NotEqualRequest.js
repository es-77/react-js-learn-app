import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const getProductsNotEqual = (idNotEqual) => {
    console.log(idNotEqual);
    return axios.get(`http://localhost:4000/products?id_ne=${idNotEqual}`);
}
function NotEqualRequest() {
    const [idNotEqual, setIdNotEqual] = useState(1)
    const { data } = useQuery(['get-product-by-not-equal', idNotEqual], () => getProductsNotEqual(idNotEqual))
    return (
        <div>OperatorsRequest
            <br />
            <label htmlFor="id">Id not Equal to</label>
            <select name="id" id="id" onChange={(e) => setIdNotEqual(e.target.value)}>
                <option value="">Select</option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
            </select>
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

export default NotEqualRequest