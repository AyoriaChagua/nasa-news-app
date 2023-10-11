import axios from 'axios';
import { Post } from '../../types/core';

const API_KEY = '4EHJbM9twQatUm84ABHrQ5nt0Rrt9ZvnMrqtHVkk';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async function (urlParams?: string) {
    const configObject = {
        method: 'GET',
        url: `${API_URL}?api_key=${API_KEY}${
            typeof urlParams !== 'undefined' && 
            urlParams?.length > 0 ? urlParams: ''
        }`
    }
    try {
        const response = await axios<Post | Post[]>(configObject)
        const normalizedResponse = Array.isArray(response.data) ? response.data : [response.data]
        return normalizedResponse
    } catch (error) {
        return Promise.reject(error)
    }
}




