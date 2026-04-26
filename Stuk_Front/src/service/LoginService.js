import api from '../api'

export const auntenticar = (data) => api.post("/autenticacao/login", data)