import React from "react";
import "../css/cardMenu.css";

const CardMenu = ({ data, agregarItem }) => {
  if (data) {
    let { _id, nombre, precio, img } = data;
    // console.log(data);
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
        <div
          className="mb-3 animate__animated animate__fadeIn"
          key={_id}
        >
          <div className="card mb-3 border border-dark">
            <div className="card-title container fondo-titulo">
              <h3 className="mt-2  text-white">{nombre}</h3>
            </div>
            <div className="card-body fondo-body">
              <img
                    src={img}
                    className="card-img-top img_paginas animate__animated animate__fadeIn"
                    alt={nombre}
                  />
              {/* <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                voluptatum ratione dolorem tempore sed ab amet porro vel
                veritatis ad?
              </p> */}
            </div>
            <div className="card-footer bg-">
              <div className="row  footer">
                <div className="col-4">
                  <small className="text-muted">${precio}</small>
                </div>
                <div className="col-4 offset-4">
                  <button
                    className="btn btn-success"
                    onClick={() => agregarItem(data)}
                  >
                    Añadir+
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CardMenu;
