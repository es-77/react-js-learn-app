import axios from 'axios'
import { useQuery } from 'react-query'
export const useSuperHeroByQuery = (heroId) => {
    return useQuery('query-by-id', () => {
        return axios.get(`http://localhost:4000/superheroes/${heroId}`)
    })
}
