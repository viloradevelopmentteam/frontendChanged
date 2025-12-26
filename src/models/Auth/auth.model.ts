// import { create } from "zustand"
// import Cookies from "js-cookie"
// import axios from "axios"
// import { jwtDecode } from "jwt-decode"
// import useCommonStore from "../../../store/commonStore/CommonStore"
// import { roleAuthStore, DecodedToken } from "./roleAuthStore"
// import { AuthState } from "./authStore.types"
// import { API_URL } from "../../../config/env"

// export const useAuthStore = create<AuthState>((set, get) => ({
//   formData: {
//     email: "",
//     password: "",
//   },

//   error: {},
//   showPassword: false,

//   user: {
//     firstName: "",
//     lastName: "",
//     email: "",
//   },

//   setUser: (data) => set({ user: data }),

//   handleChange: (e) => {
//     const { name, value } = e.target

//     set((state) => ({
//       formData: {
//         ...state.formData,
//         [name]: value,
//       },
//       error: {
//         ...state.error,
//         [name]: "",
//       },
//     }))
//   },

//   validate: () => {
//     const { email, password } = get().formData
//     const newError: Record<string, string> = {}

//     if (!email.trim()) {
//       newError.email = "Enter your email"
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       newError.email = "Enter a valid email address"
//     }

//     if (!password.trim()) newError.password = "Enter your password"

//     set({ error: newError })
//     return Object.keys(newError).length === 0
//   },

//   togglePassword: () => {
//     set((state) => ({ showPassword: !state.showPassword }))
//   },

//   login: async (navigate) => {
//     const { formData, validate } = get()
//     if (!validate()) return

//     const { setLoading } = useCommonStore.getState()

//     try {
//       setLoading(true)

//       const response = await axios.post(
//         `${API_URL}user/login`,
//         formData,
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       )

//       if (response.data?.success) {
//         const accessToken = response.data.data.__as_secure
//         const refreshToken = response.data.data.__rs_secure
//         const loginData = response.data.data.Login

//         set({
//           user: {
//             firstName: loginData.firstName,
//             lastName: loginData.lastName,
//             email: loginData.email,
//           },
//         })

//         Cookies.set("__as_secure", accessToken)
//         Cookies.set("__rs_secure", refreshToken)
//         Cookies.set("adminid", loginData.userId)

//         const decoded = jwtDecode<DecodedToken>(accessToken)

//         const roleStore = roleAuthStore.getState()
//         roleStore.setRole(decoded.role)
//         roleStore.setBranchId(decoded.branchId)
//         roleStore.setActiveBranch(decoded.branchId)

//         if (decoded.role === "SUPERADMIN") navigate("/admin")
//         else if (decoded.role === "COUNSELLOR") navigate("/counsellor")
//         else if (decoded.role === "BRANCHMANAGER") navigate("/branchmanager")
//         else navigate("/login")
//       }
//     } catch (err: any) {
//       if (err.response?.data?.message === "invalid_credentails:user_not_found") {
//         set({ error: { email: "User not found" } })
//       }
//     } finally {
//       setLoading(false)
//     }
//   },

//   logout: async () => {
//     const store = roleAuthStore.getState()
//     store.setRole(null)
//     store.setBranchId(null)
//     store.setActiveBranch(null)

//     set({ user: null })

//     Object.keys(Cookies.get()).forEach((key) => Cookies.remove(key))
//     window.location.href = "/login"
//   },
// }))
