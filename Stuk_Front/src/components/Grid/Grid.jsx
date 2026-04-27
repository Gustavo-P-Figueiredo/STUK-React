import { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import stukLogo from "../../assets/StukLogo.svg";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import "./Grid.css";

import { useUsers } from "../../hooks/useUser";
import { deleteUser } from "../../service/GridService";
import { LoginContext } from "../../context/LoginContext";

export default function Dashboard() {
  const { users, setUsers } = useUsers();
  const { user, logoff } = useContext(LoginContext);
  const navigate = useNavigate();

  const [menuAberto, setMenuAberto] = useState(false);
  const [busca, setBusca] = useState("");

  const iniciais = user?.nome
    ? user.nome
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  const nomeExibido = user?.nome || "Usuário";

  async function deleteUsuario(email) {
    if (!window.confirm(`Deseja deletar o usuário ${email}?`)) return;
    try {
      await deleteUser(email);
      setUsers((prev) => prev.filter((u) => u.email !== email));

      alert("Usuario deletado");
    } catch (erro) {
      console.log("Erro ao deletar usuario", erro);
      alert("Erro ao deletar usuario");
    }
  }

  function logOff() {
    logoff();
    navigate("/");
  }

  const usuariosFiltrados = users.filter(
    (u) =>
      u.nome?.toLowerCase().includes(busca.toLowerCase()) ||
      u.email?.toLowerCase().includes(busca.toLowerCase()),
  );

  const totalAdmins = users.filter((u) =>
    u.roles?.toLowerCase().includes("admin"),
  ).length;

  return (
    <div style={{ backgroundColor: "#fcf7f8" }} className="dashboard-container">
      <header className="header">
        <div className="header-esquerda">
          <img src={stukLogo} alt="Logo STUK" className="stuklogo" />
          <h1 style={{ color: "#3a7bd5" }}>STUK</h1>
        </div>

        <div className="header-direita">
          <Link className="botao-principal" to="/registro">
            Novo usuário
          </Link>

          <div className="usuario-container">
            <div className="usuario" onClick={() => setMenuAberto(!menuAberto)}>
              {iniciais}
            </div>

            {menuAberto && (
              <div className="dropdown">
                <p>{nomeExibido}</p>
                <button onClick={logOff}>Sair</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="totalizadores-container">
        <div className="cards">
          <p>Total de usuarios</p>
          <strong>{users.length}</strong>
        </div>

        <div className="cards">
          <p>Admins</p>
          <strong>{totalAdmins}</strong>
        </div>
      </div>

      <div className="Grid-container">
        <div className="card-grid">
          <div className="grid-header">
            <div>
              <h2>Usuários</h2>
              <p>Gerencie todos os usuários do sistema.</p>
            </div>

            <input
              type="text"
              placeholder="Buscar usuário..."
              className="pesquisar"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <table className="tabela">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Função</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuariosFiltrados.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    style={{ textAlign: "center", color: "#aaa" }}
                  >
                    Nenhum usuário encontrado.
                  </td>
                </tr>
              ) : (
                usuariosFiltrados.map((u) => (
                  <tr key={u.email}>
                    <td>
                      <div className="user">
                        <div className="avatar">
                          {u.nome?.[0]?.toUpperCase() ?? "?"}
                        </div>
                        {u.nome}
                      </div>
                    </td>
                    <td>{u.email}</td>
                    <td>{u.roles}</td>
                    <td
                      className="acoes"
                      style={{ display: "flex", gap: "12px" }}
                    >
                      <Link to={`/registrar?editar=${u.email}`} title="Editar">
                        <FaUserEdit
                          style={{ color: "#3a7bd5", fontSize: "18px" }}
                        />
                      </Link>
                      <MdDelete
                        title="Deletar"
                        style={{
                          color: "#e53e3e",
                          fontSize: "18px",
                          cursor: "pointer",
                        }}
                        onClick={() => deleteUsuario(u.email)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
