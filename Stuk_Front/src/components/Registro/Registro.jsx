import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import stukLogoBranco from "../../assets/StukLogoBranco.svg";
import "./Registro.css";

import { alterUser } from "../../service/GridService";
import api from "../../api";

export default function Registro() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const emailEditar = searchParams.get("editar");
  const modoEdicao = Boolean(emailEditar);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState(emailEditar || "");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [role, setRole] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit() {
    if (!nome || !email || !role) {
      setErro("Preencha todos os campos obrigatórios.");
      return;
    }

    if (!modoEdicao && !senha) {
      setErro("Informe uma senha.");
      return;
    }

    if (!modoEdicao && senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    setErro("");
    setCarregando(true);

    try {
      if (modoEdicao) {
        await alterUser(emailEditar, { nome, roles: role });
      } else {
        await api.post("/autenticacao/registrar", {
          nome,
          email,
          senha,
          roles: role,
        });
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao salvar usuário", error);
      setErro("Erro ao salvar usuário. Tente novamente.");
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

      <div className="registro-container">
        <div className="cabecalho">
          <h1 style={{ color: "#3a7bd5" }}>
            {modoEdicao ? "Editar usuário" : "Criar usuário"}
          </h1>
          <h2>
            {modoEdicao
              ? "Atualize os dados do usuário."
              : "Preencha os dados abaixo para criar o usuário."}
          </h2>
        </div>

        <div className="inputs">
          <h5>Nome completo</h5>
          <input
            className="input-nome"
            type="text"
            placeholder="João Silva"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <h5>Email</h5>
          <input
            className="input-email"
            type="email"
            placeholder="joao@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={modoEdicao}
          />

          {!modoEdicao && (
            <>
              <h5>Senha</h5>
              <input
                className="input-senha"
                type="password"
                placeholder="********"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <h5>Confirmar senha</h5>
              <input
                className="input-confirmarsenha"
                type="password"
                placeholder="********"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </>
          )}

          <h5>Role</h5>
          <input
            className="input-role"
            type="text"
            placeholder="ADMIN / USER"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        {erro && <p style={{ color: "red", fontSize: "14px" }}>{erro}</p>}

        {!modoEdicao && (
          <div className="tem-conta">
            <p>Já tem uma conta?</p>
            <Link style={{ color: "#3a7bd5", padding: "0px 5px" }} to="/login">
              Login
            </Link>
          </div>
        )}

        <div className="menu-actions">
          <button
            className="botao-principal"
            onClick={handleSubmit}
            disabled={carregando}
          >
            {carregando
              ? "Salvando..."
              : modoEdicao
                ? "Salvar alterações"
                : "Criar usuário"}
          </button>

          <Link className="botao-secundario" to="/dashboard">
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
}
