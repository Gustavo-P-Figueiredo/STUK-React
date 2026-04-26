import api from "../api";
import { useState } from "react";

export const getUsers = () => api.get("/usuario");

export const alterUser = (data) => api.put("/atualizarUsuario", data);

export const deleteUser = (email) => api.delete(`/usuario/delete${email}`);

