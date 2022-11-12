import React, { useEffect, useState } from "react";
import PedidoApp from "../components/PedidoApp";
import { postPedidos } from "../helpers/fetchApiPedidos";
import { useNavigate } from "react-router-dom";

const PedidosScreen = ({ pedido, setPedido }) => {
  const navigate = useNavigate();
  const eliminarItem = (id) => {
    // console.log(id);
    setPedido(
      pedido.filter((menu) => {
        // console.log(menu);
        return menu._id != id;
      })
    );

    // console.log(pedido)
  };

  const limpiarPedido = () => {
    // console.log(pedido)
    setPedido([]);
    setPrecioTotal(0);
  };

  const confirmarPedido = () => {
    // postPedidos(pedido).then((respuesta) => {
    //   console.log(respuesta)
    // })
    navigate("/pedidoConfirmado");
    limpiarPedido();
  };

  const buscarIndex = (id) => {
    let index = pedido.findIndex((obj) => obj._id === id);
    return index;
  };

  const sumarCantidad = (id) => {
    let index = buscarIndex(id);
    pedido[index].cantidad += 1;
    pedido[index].precio *= pedido[index].cantidad;
    setPedido([...pedido]);
    // console.log(id)
    // console.log(pedido);
  };

  const restarCantidad = (id) => {
    let index = buscarIndex(id);
    if (pedido[index].cantidad != 1) pedido[index].cantidad -= 1;
    setPedido([...pedido]);
    // console.log(id)
    // console.log(pedido);
  };

  const [precioTotal, setPrecioTotal] = useState(0);
  useEffect(() => {
    let total=0;
    for (let index = 0; index < pedido.length; index += 1) {
       total = pedido.reduce(function (prev, current) {
        return prev + current.precio;
      }, 0);
      
      console.log(precioTotal);
    }
    setPrecioTotal(total);
  }, [pedido]);

  return (
    <div className="container">
      <h3>Tu Pedido</h3>
      <div className="row">
        {pedido.map((item, index) => (
          <PedidoApp
            key={index}
            data={item}
            eliminarItem={eliminarItem}
            sumarCantidad={sumarCantidad}
            restarCantidad={restarCantidad}
          />
        ))}
      </div>
      <div className="row">
        <button className="btn btn-danger" onClick={limpiarPedido}>
          Eliminar Pedido
        </button>

        <h3>Total pedido: ${precioTotal}</h3>
        
        {
          precioTotal!=0 &&
            <button className="btn btn-success" onClick={confirmarPedido}>
              Confirmar Pedido
            </button>  
        }
     
        
          

        
        
      </div>
    </div>
  );
};

export default PedidosScreen;
