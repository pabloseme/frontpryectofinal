import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../helpers/fetchApi";
import { NavLink } from "react-router-dom";
import "../css/login.css";
import { MyContexto } from "../myContexto/MyContexto";

const SignInApp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  //const { setToken } = useContext(MyContexto);
  const { token,local,setLocal,setToken } = useContext(MyContexto);

  const validarDatos = (e) => {
    e.preventDefault(); //desactivo el envio por defecto

    const datos = {
      email,
      password,
    };

    // console.log(datos);
    postAuth(datos).then((respuesta) => {
      // console.log(respuesta);
      if (respuesta?.token) {
        setMessage({ ok: true, msg: "Login ok" });
        localStorage.setItem("token", JSON.stringify(respuesta.token));
        localStorage.setItem("perfil", JSON.stringify(respuesta.usuario.role)); 
        setToken(JSON.parse(localStorage.getItem("perfil")) || null);       
        navigate("/");             
        setLocal(1);             
      } else {       
        //si entra por aqui indica que ocurrio un error y nos trea el msg 
        setMessage(respuesta);         
      }
    });
  };
  return (
    <div className="mt-0">
      <div className="animate__animated animate__backInLeft">
        <div className="container d-flex justify-content-center">
          <div className="row div-contenedor contain m-3">
            <div className="overlay-panel col-md-6 col-sm-12">
              <form className="form my-3" onSubmit={validarDatos}>
                <h1>Iniciar Sesión</h1>
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  required
                />
                <button className="button my-3">Iniciar Sesion</button>
                {message && (
                  <div
                    className={
                      message?.ok
                        ? "alert alert-success mt-3"
                        : "alert alert-danger mt-3"
                    }
                    role="alert"
                  >
                    {message.msg}
                  </div>
                )}
              </form>
            </div>
            <div className="overlay-panel col-md-6 col-sm-12 background-welcome">
              <div className="p">
                <h1>Hola!</h1>
                <p>Si no estás Registrado ingresa aquí</p>
                <NavLink to="/registrar">
                  <button className="button">Registrarse</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInApp;
