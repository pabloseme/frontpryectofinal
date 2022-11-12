// const url="https://backend-proy-final-node.herokuapp.com/api"

const url="http://localhost:8080/api"


//funcion para obtener pedidos
export const postPedidos = async (datos) => {
  try {
    const resp = await fetch(
      `${url}/pedidos`,{
        method: "POST",
        body : JSON.stringify(datos),
        headers:{
            "Content-type":"application/json; charset=UTF-8",
        },
      }
    );
    const { data } = await resp.json();

    return data;
  } catch (error) {
    // console.log(error);
  }
};

export const putPedidos = async (datos,id) => {
  try {
    const resp = await fetch(
      `${url}/pedidos/${id}`,{
        method: "PUT",
        body : JSON.stringify(datos),
        headers:{
            "Content-type":"application/json; charset=UTF-8",
        },
      }
    );
    const { data } = await resp.json();

    return data;
  } catch (error) {
    // console.log(error);
  }
};


export const deletePedidos = async (id) => {
  try {
    const resp = await fetch(
      `${url}/pedidos/${id}`,{
        method: "DELETE",        
        headers:{
            "Content-type":"application/json; charset=UTF-8",
        },
      }
    );
    const { data } = await resp.json();

    return data;
  } catch (error) {
    // console.log(error);
  }
};


export const getPedidos = async () => {
  const resp = await fetch(`${url}/pedidos`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",      
    },
  });
  const data = await resp.json();

  return data;
};


