import React from 'react'
import { NavLink } from 'react-router-dom'

const PedidoConfirmadoScreen = () => {
  return (
    <div>
      <div className="fondo mt-0">
      <div className="animate__animated animate__backInLeft">
        <div className="container d-flex justify-content-center">
          <div className="row div-contenedor contain m-5">
            <div className="overlay-panel col-12">
              <div className="p">
                <h1>¡Tu pedido ha sido confirmado!👍✔</h1>
                <p>Pronto podrás disfrutar de tu comida. ¡Muchas gracias!</p>
                <NavLink to="/">
                  <button className="button">Volver al Inicio</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PedidoConfirmadoScreen