import axios from 'axios';

const api = axios.create({
    baseURL : 'https://localhost:2000/usuario'
})

export default api