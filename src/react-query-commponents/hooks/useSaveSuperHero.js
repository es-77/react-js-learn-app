import React from 'react'
import axios from 'axios'
import { useMutation } from 'react-query'

const saveHero = (heroData) => {
    return axios.post('http://localhost:4000/superheroes', heroData);
}
export const useSaveSuperHero = () => {
    return useMutation(saveHero);
}
