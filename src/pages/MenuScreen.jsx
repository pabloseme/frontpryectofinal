import React from "react";
import CardMenu from "../components/CardMenu";

const MenuScreen = ({menus, pedido, setPedido}) => {

  const agregarItem = (data) => { // setear par que si se repite el id, sube la cantidad nomas
    let index = pedido.findIndex((obj) => (
      obj._id === data._id
    ))
    // console.log(index)
    // console.log(pedido[0])
    if(index != -1) {
      pedido[index].cantidad += 1;
      // !pedido[index].hasOwnProperty('cantidad') ? pedido[index].cantidad = 2 : pedido[index].cantidad += 1
      // pedido[index].cantidad > 1 ? pedido[index].cantidad
    } else {
      data.cantidad = 1
      pedido.push(data)
      setPedido([...pedido])

    }
  };

  return (
    <div className="container">
      <div className="row">
        {menus.map((menu, index) => (
          <CardMenu key={index} data={menu} agregarItem={agregarItem} />
        ))}
      </div>
    </div>
  );
};

export default MenuScreen;