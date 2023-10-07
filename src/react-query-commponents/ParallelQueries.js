import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const getPosts = () => {
    return axios.get('http://localhost:4000/posts');
}
const getComments = () => {
    return axios.get('http://localhost:4000/comments');
}
const getProfile = () => {
    return axios.get('http://localhost:4000/profile');
}
function ParallelQueries() {

    const { data: dataPosts } = useQuery('dataPosts', () => { return getPosts });
    const { data: dataComments } = useQuery('dataComments', () => { return getComments });
    const { data: dataProfile } = useQuery('dataProfile', () => { return getProfile });
    return (
        <div>ParallelQueries</div>
    )
}

export default ParallelQueries