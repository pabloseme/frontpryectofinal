import React from "react";
import "../css/pedido.css";

const PedidoApp = ({ data, eliminarItem, restarCantidad, sumarCantidad }) => {
  if (data) {
    let { _id, nombre, precio, img, cantidad } = data;
    // console.log(data);
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mt-5 tarjeta">
        <div className="mb-3 animate__animated animate__fadeIn" key={_id}>
          <div className="card mb-3 border border-dark">
            <div className="card-title container fondo-titulo">
              <h5 className="mt-2  text-white">{nombre}</h5>
            </div>
            <div className="card-body fondo-body">
              <div className="text-center">
                <small className="text-muted fs-3">${precio}</small>
              </div>
            </div>
            <div className="card-footer bg-">
              <div className="row justify-content-center footer">
                <div className="col-6 row btn-eliminar">
                  <div className="col-4 btn-eliminar">
                    <button className="btn" onClick={() => restarCantidad(_id)}>
                      -
                    </button>
                  </div>
                  <div className="col-4 btn-eliminar">
                    {cantidad}
                  </div>
                  <div className="col-4 btn-eliminar">
                    <button className="btn" onClick={() => sumarCantidad(_id)}>
                      +
                    </button>
                  </div>
                </div>

                <div className="col-6 btn-eliminar">
                  <button
                    className="btn btn-success"
                    onClick={() => eliminarItem(_id)}
                  >
                    Eliminar
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

export default PedidoApp;
