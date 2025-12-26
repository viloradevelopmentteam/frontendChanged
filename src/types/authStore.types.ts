export interface UserInfo {
  firstName: string
  lastName: string
  email: string
}

export interface AuthFormData {
  email: string
  password: string
}

export interface AuthError {
  email?: string
  password?: string
}

export interface AuthState {
  formData: AuthFormData
  error: AuthError
  showPassword: boolean
  user: UserInfo | null

  setUser: (data: UserInfo) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  togglePassword: () => void
  validate: () => boolean
  login: (navigate: (path: string) => void) => Promise<void>
  logout: () => Promise<void>
}
