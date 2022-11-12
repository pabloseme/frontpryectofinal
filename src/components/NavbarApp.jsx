import React, { useEffect, useState, useContext } from "react";
import { MyContexto } from "../myContexto/MyContexto";
import { Link, Navigate, NavLink } from "react-router-dom";
import "../css/navbar.css";

const NavbarApp = () => {
  //usando el hook useContext, traigo Mycontexto para usar lo que necesite de su propiedad value
  const { token,local,setLocal } = useContext(MyContexto);

  //const [local, setLocal] = useState();

  useEffect(() => {
    const local1 = JSON.parse(localStorage.length) || [];
    // console.log(local1);
    setLocal(local1);
  }, []);

  const cerrarSesion = () => {
    const cerrar = window.confirm("Seguro quieres Cerrar Sesion?");

    if (cerrar) {
      localStorage.clear();
      setLocal(0);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg title-nav w-100">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            className="image-navbar"
            src="https://i.ibb.co/MVx3xmf/sabor-en-C-D-gos-1.gif"
            alt="Logo Sabor en Codigos"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link text-light"
                aria-current="page"
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-light" to="/menu">
                Nuestro Menú
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-light" to="/pedidos">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> Tu
                Pedido
              </NavLink>
            </li>
            {token === "ADMIN_ROLE" && (
              <li className="nav-item mx-2">
                <NavLink className="nav-link text-light" to="/admin">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                  Administrar Menus
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav">
            {(local != 0 && (
              <li>

                  <button className="btn btn-login" onClick={()=> cerrarSesion()}>
                    <i className="fa fa-sign-in" aria-hidden="true"></i> Cerrar
                    Sesion
                  </button>
                  
              </li>
            )) || (
              <li>
                <NavLink to="/login">
                  <button className="btn btn-login">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>{" "}
                    Ingresar
                  </button>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarApp;
