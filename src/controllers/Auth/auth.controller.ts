
import { loginRequest } from "../../models/Auth/auth.model"
import { setToken } from "../../services/Auth/token.service"
import { useAuthStore } from "../../store/Auth/auth.store"

export const loginController = async (
  email: string,
  password: string
) => {
  if (!email || !password) {
    throw new Error('Email and password required')
  }

  const data = await loginRequest({ email, password })

  setToken(data.token)
  useAuthStore.getState().setUser(data.user)

  return data
}
