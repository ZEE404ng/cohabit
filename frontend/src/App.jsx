import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Header from './components/Header'
import Home from './components/Home'
import PropertyPage from './pages/PropertyPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login startInRegister />} />
        <Route path="/listings" element={<PropertyPage />} />
      </Routes>
    </>
  )
}

export default App