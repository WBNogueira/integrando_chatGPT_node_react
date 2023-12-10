import axios from 'axios'
const URL_API = 'http://localhost:5555/api/prompt'

export const makeRequest = async (message) => {
    try {
        const { data } = await axios.post(URL_API, message)
        return data  
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
    
}