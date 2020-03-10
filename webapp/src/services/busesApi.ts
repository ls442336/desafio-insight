import axios from 'axios';

const busesApi = axios.create({
    baseURL: `http://localhost:5000/api/sp`
});

export default busesApi; 