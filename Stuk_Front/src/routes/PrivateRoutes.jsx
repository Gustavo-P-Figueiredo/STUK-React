import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

export default function PrivateRoute ({ children }) {
    const { user } = useContext(LoginContext);

    if(!user) {
        return <Navigate to="/login" />;
    }

    return children;
}