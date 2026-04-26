import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ token });
    }
  }, []);

  function login(data) {
    localStorage.setItem("token", data.token);
    setUser(data);
  }

  function logoff() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <LoginContext.Provider value={{ user, login, logoff }}>
      {children}
    </LoginContext.Provider>
  );
}