import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'http://192.168.1.102:8001/',
    responseType: 'json',
    withCredentials: true
})

export default ApiManager;
