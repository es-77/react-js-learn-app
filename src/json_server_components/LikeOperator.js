import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const getProductsByOrder = (like) => {
    console.log(like);
    // return axios.get(`http://localhost:4000/products?price_gte=${greater}&price_lte=${less}`);
}
function LikeOperator() {
    return (
        <div>LikeOperator</div>
    )
}

export default LikeOperator