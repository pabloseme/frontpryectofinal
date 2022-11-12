// const url="https://backend-proy-final-node.herokuapp.com/api"

const url="http://localhost:8080/api"


//funcion para obtener usuarios
export const postUsuarios = async (datos) => {
  try {
    const resp = await fetch(
      `${url}/usuarios`,{
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

export const putUsuarios = async (datos,id) => {
  try {
    const resp = await fetch(
      `${url}/usuarios/${id}`,{
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


export const deleteUsuarios = async (id) => {
  try {
    const resp = await fetch(
      `${url}/usuarios/${id}`,{
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


export const getUsuarios = async () => {
  const resp = await fetch(`${url}/usuarios`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",      
    },
  });
  const data = await resp.json();

  return data;
};


