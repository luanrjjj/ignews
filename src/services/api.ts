import axios from 'axios'

export const api = axios.create ({
    baseURL: '/api'      // O Axios aproveita a Rota da Aplicação
})