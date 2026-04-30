import { useEffect, useState } from "react";
import { getUsers } from "../service/GridService";

export function useUsers() {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários", error);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    setUsers,
    recarregar: loadUsers,
  };
}