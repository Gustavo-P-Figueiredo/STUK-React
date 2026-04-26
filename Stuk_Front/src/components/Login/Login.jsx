import { useNavigate } from "react-router-dom";
import { useState } from "react";
import stukLogoBranco from "../../assets/StukLogoBranco.svg";
import "./Login.css";

import { useLogin } from "../../hooks/UseLogin";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const { pegarLogin } = useLogin();

  async function chamarLogin() {
    if (!email || !senha) {
      setErro("Preencha as credencias de login");
      return;
    }

    setErro("");
    setCarregando(true);

    try {
      await pegarLogin(email, senha);
    } catch {
      setErro("E-mail ou senha incorreto");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="page-container">
      <div className="background-container">
        <div className="logo-container">
          <img
            src={stukLogoBranco}
            alt="Logo STUK branco"
            className="stuklogoBranco"
          />
          <h4>Gerencie seus usuários de forma simples e eficiente</h4>
        </div>
      </div>

      <div className="login-container">
        <div className="cabecalho">
          <h1 style={{ color: "#3a7bd5" }}>Bem-vindo de volta!</h1>
          <h2>Entre com suas credenciais para acessar sua conta.</h2>
        </div>

        <div className="inputs">
          <h5>Email</h5>
          <input
            className="input-email"
            placeholder="Seu@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Senha</h5>
          <input
            className="input-senha"
            placeholder="********"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && pegarLogin()}
          />
        </div>

        {erro && <p style={{ color: "red", fontSize: "20px" }}>{erro}</p>}

        <p className="esqueceusenha">
          Esqueceu sua senha? Entre em contato com seu gestor
        </p>

        <div className="menu-actions">
          <button
            className="botao-principal"
            onClick={chamarLogin}
            >
            {carregando ? "Entrando..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
