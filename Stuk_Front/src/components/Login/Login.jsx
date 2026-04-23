import { Link } from "react-router-dom";
import stukLogoBranco from "../../assets/StukLogoBranco.svg";
import "./Login.css";

export default function Login() {
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
            type="text"
            placeholder="Seu@email.com"
          />

          <h5>Senha</h5>
          <input className="input-senha" type="text" placeholder="********" />
        </div>

        <p className="esqueceusenha">
          Esqueceu sua senha? Entre em contato com seu gestor
        </p>

        <div className="menu-actions">
          <Link className="botao-principal" to="/dashboard">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
