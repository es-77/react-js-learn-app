import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const getProductsWithRelationship = (relationship) => {
    console.log(relationship);
    return axios.get(`http://localhost:4000/products?_embed=${relationship}`);
}
function RelationshipsData() {
    const [relationship, setrelationship] = useState('reviews');

    const { data } = useQuery(['get-product-with-relationship', relationship], () => getProductsWithRelationship(relationship))
    console.log(">>>>>>>>>", data)
    return (
        <div>LikeOperator
            <br />
            <br />
            <select name="relationship" id="relationship" value={relationship} onChange={(e) => setrelationship(e.target.value)}>
                <option value="">Select</option>
                <option value="reviews"> reviews</option>
                <option value="productDetails"> product Details</option>
            </select>
            <br />
            {data?.data?.map((product) => {
                return <div key={product?.id}>
                    <span><b>name</b> :  {product?.name} : </span> <span><b>price</b> :  {product?.price}</span>
                    {product?.reviews?.map((review, index) => {
                        return (<div key={`${index}_reviews`}>
                            <h6>Reviews <b>id</b> : {review?.id} <b>rating : </b> {review?.rating} <b>comment : </b> {review?.comment}</h6>
                        </div>)
                    })}
                    {product?.productDetails?.map((detail, index) => {
                        return <div key={`${index}_detail`}>
                            <h6>Product Details id : {detail?.id} <b>detail : </b> {detail?.detail} </h6>
                        </div>
                    })}

                </div>
            })}
        </div>
    )
}

export default RelationshipsData