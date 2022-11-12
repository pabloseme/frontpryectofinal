import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AdminApp from "../components/AdminApp";

const AdminScreen = () => {
  const [permiso, setPermiso] = useState("");

  useEffect(() => {
    const token1 = JSON.parse(localStorage.getItem("perfil")) || null;

    setPermiso(token1);
  }, []);

  if (permiso != "ADMIN_ROLE") {
    return (
      <div className="container">
        <div className="row alert alert-warning my-5 mx-2">
          <div className="d-flex justify-content-center" role="alert">
            <h3>No está autorizado para acceder a esta sección!</h3>
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            <NavLink to="/">
            <button className="btn btn-success">Regresar al Inicio</button>

            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return <AdminApp />;
};

export default AdminScreen;
