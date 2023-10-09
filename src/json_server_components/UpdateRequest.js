import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query';
const saveProduct = async (data) => {
    try {
        const response = await axios.put('http://localhost:4000/products/1', data);
        return response.data;
    } catch (error) {
        throw new Error('Error saving product');
    }
};
function UpdateRequest() {
    const [data, setData] = useState({
        id: '',
        name: '',
        price: '',
        category: '',
        description: '',
    });
    const handleSave = useMutation(saveProduct, {
        onSuccess: () => {
            alert('Data saved successfully!');
        },
        onError: (error) => {
            alert('Error saving data: ' + error.message);
        }
    });

    const handleClick = () => {
        console.log('data', data);
        handleSave.mutate(data);
    };
    return (
        <div>UpdateRequest
            <br />
            <form>
                <br />
                <input type="text" name="id" id="id" placeholder='id' onChange={(e) => setData(prev => {
                    return { ...prev, id: e.target.value }
                })} />
                <br />
                <input type="text" name="name" id="name" placeholder='name' onChange={(e) => setData(prev => {
                    return { ...prev, name: e.target.value };
                })} />
                <br />
                <input type="number" name="price" id="price" placeholder='price' onChange={(e) => setData(prev => {
                    return { ...prev, price: e.target.value }
                })} />
                <br />
                <input type="text" name="category" id="category" placeholder='category' onChange={(e) => setData(prev => {
                    return { ...prev, category: e.target.value }
                })} />
                <br />
                <input type="text" name="description" id="description" placeholder='description' onChange={(e) => setData(prev => {
                    return { ...prev, description: e.target.value }
                })} />
                <br />
                <button type='button' onClick={handleClick} >save data </button>
            </form>
        </div>
    )
}

export default UpdateRequest