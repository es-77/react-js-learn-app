import React from 'react'
import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'

const saveHero = (heroData) => {
    return axios.post('http://localhost:4000/superheroes', heroData);
}
// export const useSaveSuperHero = () => {
//     return useMutation(saveHero);
// }
export const useSaveSuperHero = () => {
    const queryClient = useQueryClient();
    return useMutation(saveHero, {
        onSuccess: () => {
            queryClient.invalidateQueries('my-herors-data');
        }
    });
}
