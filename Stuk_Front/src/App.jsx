import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Menu from "./components/Menu/Menu.jsx"
import Registro from "./components/Registro/Registro.jsx"
import Login from "./components/Login/Login.jsx"
import Dashboard from './components/Grid/Grid.jsx'


function App() {
  return (
    <BrowserRouter> 
    
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/registrar" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
