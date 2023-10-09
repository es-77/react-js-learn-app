import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query';
const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:4000/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error delete product');
    }
};
function DELETERequest() {
    const handleDelete = useMutation(deleteProduct, {
        onSuccess: () => {
            alert('Data saved successfully!');
        },
        onError: (error) => {
            alert('Error saving data: ' + error.message);
        }
    });
    const handleChange = (deleteId) => {
        handleDelete.mutate(deleteId);
    }

    return (
        <div>DELETERequest
            <br />
            <label htmlFor="id">Delete Id</label>
            <select name="id" id="id" onChange={(e) => handleChange(e.target.value)}>
                <option value="">Select</option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
            </select>
        </div>
    )
}

export default DELETERequest