import { useEffect, useState } from "react";
import { getUsers } from "../service/GridService";

export function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários", error);
      }
    }

    loadUsers();
  }, []);

  return { users };
}