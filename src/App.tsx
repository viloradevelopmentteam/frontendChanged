import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginView from './views/Auth/Login.view'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
