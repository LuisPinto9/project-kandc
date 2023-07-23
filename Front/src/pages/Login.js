import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      inicio de sesion
      <Link to="/dashboard-admin">
        <p>Admin</p>
      </Link>
      <Link to="/dashboard-usuario">
        <p>Usuario</p>
      </Link>
    </div>
  );
};

export default Login;
