import api from "../api";
import { useState } from "react";

export const getUsers = () => api.get("/usuario");

export const alterUser = (email, data) =>
  api.put(`/usuario/atualizarUsuario?email=${email}`, data);

export const deleteUser = (email) =>
  api.delete(`/usuario/delete?email=${email}`, {
    validateStatus: (status) => status >= 200 && status < 300,
  });
