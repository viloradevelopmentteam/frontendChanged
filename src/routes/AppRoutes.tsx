import { JSX } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from '../store/Auth/auth.store'
import LoginView from '../views/Auth/Login.view'
// import { useAuthStore } from '../store/auth.store'
// import LoginView from '../views/auth/Login.view'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuth = useAuthStore((s) => s.isAuthenticated)
  return isAuth ? children : <Navigate to="/login" />
}

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginView />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <div>Dashboard</div>
        </ProtectedRoute>
      }
    />
  </Routes>
)

export default AppRoutes
