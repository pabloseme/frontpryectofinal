import { Routes, Route } from "react-router-dom";
import HomeScreen from '../pages/HomeScreen'
import LoginScreen from '../pages/LoginScreen'
import PedidosScreen from '../pages/PedidosScreen'
import ErrorScreen from '../pages/ErrorScreen'
import MenuScreen from "../pages/MenuScreen";
import SignInApp from "../components/SignInApp";
import SignUpApp from "../components/SignUpApp";
import AdminScreen from "../pages/AdminScreen";
import PedidoConfirmadoScreen from "../components/PedidoConfirmadoScreen";
import { useEffect, useState } from "react";
import { getMenus } from "../helpers/fetchAdmin";

const RoutesApp = () => {
  const [menus, setMenus] = useState([])
  const [pedido, setPedido] = useState([])

    useEffect(() => {
        getMenus().then((respuesta) => {
          // console.log(respuesta);
          let arreglo = [];

          Array.from(respuesta.menus).forEach((element) => {
            const { nombre, precio, img, _id } = element;

            arreglo.push({ nombre, precio, img, _id });
          });

          setMenus([...arreglo]);
          // setLoading(false);
        });
    }, [])
  return (
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/pedidos" element={<PedidosScreen pedido={pedido} setPedido={setPedido}/>} />
        <Route path="/menu" element={<MenuScreen menus={menus} pedido={pedido} setPedido={setPedido}/>} />
        <Route path="/iniciar" element={<SignInApp />} />
        <Route path="/registrar" element={<SignUpApp />} />
        <Route path="/pedidoConfirmado" element={<PedidoConfirmadoScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="*" element={<ErrorScreen />} />
    </Routes>

    )
}

export default RoutesApp