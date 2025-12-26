// import axios, { AxiosRequestHeaders } from "axios"
// import Cookies from "js-cookie"


// const api = axios.create({
//   baseURL: API_URL,
//   withCredentials: true,
// })

// const refreshApi = axios.create({
//   baseURL: API_URL,
//   withCredentials: true,
// })

// api.interceptors.request.use((config) => {
//   const accessToken = Cookies.get("__as_secure")

//   if (accessToken) {
//     config.headers = {} as AxiosRequestHeaders
//     config.headers.Authorization = `Bearer ${accessToken}`
//   }

//   return config
// })

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config

//     if (
//       (error.response?.status === 401 || error.response?.status === 403) &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true

//       const refreshToken = Cookies.get("__rs_secure")
//       if (!refreshToken) return Promise.reject(error)

//       try {
//         const res = await refreshApi.get("refreshToken", {
//           headers: {
//             Authorization: `Bearer ${refreshToken}`,
//           },
//         })

//         Cookies.set("__as_secure", res.data)
//         return api(originalRequest)
//       } catch (err) {
//         Cookies.remove("__as_secure")
//         Cookies.remove("__rs_secure")
//         window.location.reload()
//         return Promise.reject(err)
//       }
//     }

//     return Promise.reject(error)
//   }
// )

// export default api
