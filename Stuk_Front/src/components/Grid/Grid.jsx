import { useState } from "react";
import { Link } from "react-router-dom";
import stukLogo from "../../assets/StukLogo.svg";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import "./Grid.css";

import { useUsers } from "../../hooks/useUser";

export default function Dashboard() {
  const { users } = useUsers();

  const [menuAberto, setMenuAberto] = useState(false);

  const usuario = {
    nome: "Caique Silva",
  };

  const iniciais = usuario.nome
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

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
                <p>{usuario.nome}</p>
                <button>Sair</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="totalizadores-container">
        <div className="cards">
          <p>Total de usuarios</p>
        </div>

        <div className="cards">
          <p>Admins</p>
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
              {users.map((user) => (
                <tr key={user.nome}>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.roles}</td>
                  <td className="acoes">
                    <FaUserEdit />
                    <MdDelete />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
