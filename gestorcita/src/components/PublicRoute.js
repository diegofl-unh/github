import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  // Si hay un token en el almacenamiento local, redirige al usuario a la página de inicio
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    // De lo contrario, renderiza los children pasados al componente
    return children;
  }
}

export default PublicRoute;
