import axios from 'axios'
import { useQuery } from 'react-query'
export const useSuperHeroDataFetch = (onSuccess, onError) => {
    return useQuery('custome-hook', () => {
        return axios.get('http://localhost:4000/superheroes');
    },
        {
            onSuccess,
            onError
        }
    )
}

