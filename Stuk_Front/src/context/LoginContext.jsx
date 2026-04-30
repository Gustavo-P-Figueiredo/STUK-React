import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    return token && savedUser ? JSON.parse(savedUser) : null;
  });

  function login(data) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  }

  function logoff() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <LoginContext.Provider value={{ user, login, logoff }}>
      {children}
    </LoginContext.Provider>
  );
}