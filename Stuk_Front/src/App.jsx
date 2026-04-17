import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Menu from "./components/Menu/Menu.jsx"
import Registro from "./components/Registro/Registro.jsx"
import Login from "./components/Login/Login.jsx"
import Grid from "./components/Grid/Grid.jsx"


function App() {
  return (
    <BrowserRouter> 
    
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
