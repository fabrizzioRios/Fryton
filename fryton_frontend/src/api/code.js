import axios from 'axios';

const frytonApiConnection = axios.create(
    {
        baseURL: "http://127.0.0.1:8001/api1/run-code/send-code"
    }
)

export const runCodeApi = (text) => frytonApiConnection.post('', text)
