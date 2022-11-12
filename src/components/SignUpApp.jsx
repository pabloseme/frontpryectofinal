import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../css/login.css";
import { postUsuarios } from "../helpers/fecthApiUsuarios";

const SignUpApp = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    id: "",
    nombre: "",
    email: "",
    password: "",
    role: "USERS_ROLE",
    estado: true,
    img: "",
  });

  const [verificarPassword, setVerificarPassword] = useState({
    password1: "",
  });

  const [message, setMessage] = useState([]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    setVerificarPassword({
      ...verificarPassword,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);
    if (formValues.password === verificarPassword.password1) {
      postUsuarios(formValues).then((respuesta) => {
        //console.log(respuesta);
        if (respuesta?.errors) {
          setMessage(respuesta.errors);
        } else {
          setMessage([{ ok: true, msg: "Registro exitoso!" }]);
          setFormValues({
            _id: "",
            nombre: "",
            email: "",
            password: "",
            role: "USERS_ROLE",
            estado: true,
            img: "",
          });
          setTimeout(() => {
            setMessage([]);
          }, 2000);
          navigate("/login");
        }
      });
    } else {
      document.getElementById("error").classList.add("mostrar");
 
      return false;    }
  };

  return (
    <div className="animate__animated animate__backInRight">
      <div className="container d-flex justify-content-center">
        <div className="row div-contenedor contain m-3">
          <div className="overlay-panel col-md-6 col-sm-12 background-welcome">
            <div className="p">
              <h1>Bienvenido</h1>
              <p>Ingresa si ya estas registrado</p>
              <NavLink to="/iniciar">
                <button className="button">Ingresar</button>
              </NavLink>
            </div>
          </div>
          <div className="overlay-panel col-md-6 col-sm-12">
            <div className="mt-3" id="msg"></div>

            {/* Mensajes de Verificación */}
            <div id="error" className="alert alert-danger ocultar" role="alert">
              Las Contraseñas no coinciden, vuelve a intentar !
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <h1>Crear nueva Cuenta</h1>
              <div className="social-container">
                <a
                  href="https://m.facebook.com/?locale=es_LA&_rdr"
                  className="a"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.google.com/" className="a">
                  <i className="fa fa-google" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/" className="a">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
              </div>
              <input
                className="input"
                type="text"
                name="nombre"
                maxLength="25"
                value={formValues.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                required
              />
              <input
                className="input"
                type="email"
                name="email"
                maxLength="50"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                className="input"
                type="password"
                name="password"
                maxLength="30"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Contraseña"
              />
              <input
                className="input"
                type="password"
                name="password1"
                maxLength="30"
                value={verificarPassword.password1}
                onChange={handleChange}
                placeholder="Repetir Contraseña"
              />
              <button className="button mb-3">Crear</button>
            </form>
            {message.length > 0 &&
              message.map((item, index) => (
                <div
                  className={
                    item?.ok
                      ? "alert alert-success mt-3"
                      : "alert alert-danger mt-3"
                  }
                  role="alert"
                  key={index}
                >
                  {item.msg}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpApp;
