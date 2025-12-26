// import api from '../../services/api'

import api from "../../services/Auth/api"

export interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  user: {
    id: number
    email: string
    role: string
  }
}

export const loginRequest = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const res = await api.post('/auth/login', payload)
  return res.data.data
}
