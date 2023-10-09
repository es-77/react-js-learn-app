import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query';
const patchProduct = async (data) => {
    try {
        const response = await axios.patch('http://localhost:4000/products/1', data);
        return response.data;
    } catch (error) {
        throw new Error('Error saving product');
    }
};
function PATCHRequest() {
    const [data, setData] = useState({
        name: '',
    });
    const handleSave = useMutation(patchProduct, {
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
        <div>PATCHRequest
            <br />
            <form>
                <br />
                <br />
                <input type="text" name="name" id="name" placeholder='name' onChange={(e) => setData(prev => {
                    return { ...prev, name: e.target.value };
                })} />
                <br />
                <br />
                <button type='button' onClick={handleClick} >save data </button>
            </form>
        </div>
    )
}

export default PATCHRequest