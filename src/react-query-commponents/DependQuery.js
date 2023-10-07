import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
const getUserByEmail = (userEmail) => {
    return axios.get('http://localhost:4000/users/' + userEmail);
}
const getAddressById = (addressId) => {
    return axios.get('http://localhost:4000/address/' + addressId);
}
function DependQuery(userEmail) {
    const { data: userData } = useQuery(['user-email', userEmail], () => getUserByEmail(userEmail))
    const addressId = userData?.data?.addressId;
    const { data: addresData } = useQuery(['user-address', addressId], () => getAddressById(addressId), { enabled: !!addressId, })
    console.log("result", userData?.data, "addresData", addresData);
    return (
        <div>DependQuery</div>
    )
}

export default DependQuery