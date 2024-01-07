import React from 'react'
import DataTable from './DataTable'

import axios from 'axios'
import { useQuery } from 'react-query'


const columns = [
    { field: 'id', headerName: 'product_id', width: 130 },
    // { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'product_name', headerName: 'product_name', width: 130 },
    { field: 'product_price', headerName: 'product_price', width: 130 },
    { field: 'product_category', headerName: 'product_category', width: 130 },
    { field: 'product_description', headerName: 'product_description', width: 130 },
    // { field: 'Review_id', headerName: 'Review_id', width: 130 },
    { field: 'Review_productId', headerName: 'Review_productId', width: 130 },
    { field: 'Review_comment', headerName: 'Review_comment', width: 130 },
    { field: 'Review_rating', headerName: 'Review_rating', width: 130 },
    // { field: 'like_id', headerName: 'like_id', width: 130 },
    { field: 'like_productId', headerName: 'like_productId', width: 130 },
    { field: 'like_comment', headerName: 'like_comment', width: 130 },
    // { field: 'like_rating', headerName: 'like_rating', width: 130 },
    // { field: 'heart_id', headerName: 'heart_id', width: 130 },
    { field: 'heart_productId', headerName: 'heart_productId', width: 130 },
    { field: 'heart_comment', headerName: 'heart_comment', width: 130 },
    // { field: 'heart_rating', headerName: 'heart_rating', width: 130 }
];


const handleSelect = (data) => {
    const selectedData = data?.map((singleRowData, index) => ({
        id: singleRowData?.id,
        product_name: singleRowData?.name,
        product_price: singleRowData?.price,
        product_category: singleRowData?.category,
        product_description: singleRowData?.description,
        Review_id: singleRowData?.reviews[0]?.id,
        Review_productId: singleRowData?.reviews[0]?.productId,
        Review_comment: singleRowData?.reviews[0]?.comment,
        Review_rating: singleRowData?.reviews[0]?.rating,
        like_id: singleRowData?.like[0]?.id,
        like_productId: singleRowData?.like[0]?.productId,
        like_comment: singleRowData?.like[0]?.detail,
        heart_id: singleRowData?.heart[0]?.id,
        heart_productId: singleRowData?.heart[0]?.productId,
        heart_comment: singleRowData?.heart[0]?.detail,

    }))
    return selectedData;
}

function TableRender() {

    const { isLoading, isError, isFetching, isFetched, isSuccess, data } = useQuery('data-transform', () => {
        return axios.get(`http://localhost:4000/products?_embed=reviews&_embed=productDetails&_embed=like&_embed=heart`);
    },
        {
            select: (data) => {
                return handleSelect(data?.data);
            }
        }
    )


    console.log('data', data)
    return (
        <div>
            {isFetched && <DataTable tableHeader={columns} tableData={data} />}
        </div>
    )
}

export default TableRender