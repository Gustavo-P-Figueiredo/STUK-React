import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Menu from "./components/Menu/Menu.jsx";
import Registro from "./components/Registro/Registro.jsx";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Grid/Grid.jsx";

import PrivateRoute from "./routes/privateRoutes.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="/registrar" element={<Registro />} />

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
