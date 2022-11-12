import React from "react";
import { NavLink } from "react-router-dom";

const ErrorScreen = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <img
          className="col"
          src="https://img.freepik.com/free-vector/error-404-concept-landing-page_114360-2279.jpg?w=740&t=st=1664058869~exp=1664059469~hmac=3787e1d1f7e1ba77d8c1301992afd29c1b5e5dfb635689a45a2acdecfe57ab26"
          alt="Page not found"
        />
      </div>
      <div className="col d-flex justify-content-center my-3">
        <NavLink to="/">
          <button className="btn btn-success">Regresar al Inicio</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorScreen;
