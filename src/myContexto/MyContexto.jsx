import { createContext, useState, useEffect } from "react";

export const MyContexto = createContext();

export const MyProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const [local, setLocal] = useState(); //lo agregue en 10/11/2022

  useEffect(() => {
    const token1 = JSON.parse(localStorage.getItem("perfil")) || null;

    // console.log(token1);
    setToken(token1);
    
  }, [token]);

  return (
    //value, recibe un objeto las primeras llaves es para poder escribir sentencias de javascript
    <MyContexto.Provider
      value={{
        nombre: "Daniel",
        token,
        setToken,
        local,
        setLocal,
      }}
    >
      {children}
    </MyContexto.Provider>
  );
};
