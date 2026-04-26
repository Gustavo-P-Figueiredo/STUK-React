import api from '../api'

export const autenticar = (data) => api.post("/autenticacao/login", data)