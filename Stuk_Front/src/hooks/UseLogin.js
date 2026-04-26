import { useState } from "react";
import { auntenticar } from "../service/LoginService";

export function useLogin() {
  const [user, setUser] = useState(null);

  async function pegarlogin(email, senha) {
    try {
      const response = await useLogin({ email, senha });

      const token = response.data.token;

      localStorage.setItem("token", token);

      setUser({ email });
    } catch (erro) {
      console.error("Erro no login", erro);
    }
  }

  return { user, pegarlogin };
}
