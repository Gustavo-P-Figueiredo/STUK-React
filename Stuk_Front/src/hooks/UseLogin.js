import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { autenticar } from "../service/LoginService";
import { LoginContext } from "../context/LoginContext";

export function useLogin() {
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  async function pegarLogin(email, senha) {
    try {
      const response = await autenticar({ email, senha });

      login(response.data);
      navigate("/dashboard");
    } catch (erro) {
      console.error("Erro no login:", erro);
      throw erro;
    }
  }

  return { pegarLogin };
}
