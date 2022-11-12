import React, { useEffect, useState } from "react";
import "../css/admin.css";
import {
  getMenus,
  postMenus,
  putMenus,
  deleteMenus,
} from "../helpers/fetchAdmin";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { getCategoria } from "../helpers/fetchApiCateg";

const AdminApp = () => {
  const [menus, setMenus] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formValues, setFormValues] = useState({
    _id: "",
    nombre: "",
    precio: 0,
    nombcateg: "",
    img: "",
    activo: true,
  });

  const [message, setMessage] = useState([]);
  const [habmodal, setHabmodal] = useState(false); //este hook lo uso para habilitar el modal
  const [modaldelete, setModaldelete] = useState(false); //para mostrar o no el modal de eliminacion
  const [menuselecc, setMenuselecc] = useState({
    _id: "",
    nombre: "",
    precio: 0,
    nombcateg: "",
    img: "",
    activo: true,
  });

  const hola = (menu, accion) => {
    // console.log(menu._id);
    setMenuselecc({
      nombre: menu.nombre,
      precio: menu.precio,
      nombcateg: menu.nombcateg,
      img: menu.img,
      activo: menu.activo,
      _id: menu._id,
    });

    accion === "actualizar"
      ? setHabmodal(!habmodal)
      : setModaldelete(!modaldelete);
  };

  const handleChangeact = (e) => {
    setMenuselecc({
      ...menuselecc,
      [e.target.name]: e.target.value,
    });
  };

  const guardaract = (dato, id) => {
    putMenus(dato, id).then((respuesta) => {
      setFormValues({
        nombre: "",
        precio: 0,
        nombcateg: "",
        img: "",
        activo: true,
      });

      setHabmodal(!habmodal);
    });
  };

  const eliminar = (id) => {
    deleteMenus(id).then((respuesta) => {
      setFormValues({
        nombre: "",
        precio: 0,
        nombcateg: "",
        img: "",
        activo: true,
      });

      setModaldelete(!modaldelete);
    });
  };

  useEffect(() => {
    getCategoria().then((respuesta) => {
      // console.log(respuesta.categorias);

      setCategorias([...respuesta.categorias]);
    });
  }, []);
  useEffect(() => {
    getMenus().then((respuesta) => {
      let arreglo = [];

      respuesta.menus.forEach((element) => {
        const { nombre, precio, nombcateg, img, activo, _id } = element;
        arreglo.push({ nombre, precio, nombcateg, img, activo, _id });
      });

      setMenus([...arreglo]);
      setLoading(false);
    });
  }, [formValues]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //desactivo el envio por defecto

    postMenus(formValues).then((respuesta) => {
      // console.log(respuesta)

      setFormValues({
        nombre: "",
        precio: 0,
        nombcateg: "",
        img: "",
        activo: true,
      });
    });

    const actualizarmenus = (menuactual, tipo) => {
      setMenuselecc({ menuactual });
    };
  };

  return (
    <>
      <div className="mt-0">
        <div className="animate__animated animate__backInLeft">
          <div className="container d-flex justify-content-center">
            <div className="row div-contenedor contain m-5">
              <div className="overlay-panel col-sm-12">
                <h1>Administración de Menus</h1>
              </div>
              <div className="col-12 col-md-6 offset-md-3 mb-3 form_curso background-welcome">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-center">
                    <h3>Agregar Menu</h3>
                  </div>

                  <input
                    name="nombre"
                    className="input"
                    type="text"
                    maxLength={40}
                    required
                    value={formValues.nombre}
                    onChange={handleChange}
                    placeholder="Nombre del Producto"
                  />

                  <select
                    name="nombcateg"
                    className="input"
                    aria-label="Default select example"
                    required
                    value={formValues.nombcateg}
                    onChange={handleChange}
                  >
                    <option
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
                    >
                      Categoria
                    </option>
                    {categorias.map((cat) => (
                      <option key={cat._id} value={cat.nombre}>
                        {cat.nombre}
                      </option>
                    ))}
                  </select>

                  <input
                    name="img"
                    className="input"
                    type="url"
                    required
                    value={formValues.img}
                    onChange={handleChange}
                    placeholder="Imagen (url)"
                  />
                  <label>$Precio$</label>
                  <input
                    name="precio"
                    className="input"
                    type="number"
                    min={1}
                    max={100000}
                    required
                    value={formValues.precio}
                    onChange={handleChange}
                  />

                  <br />

                  <label>Activar</label>
                  <select
                    name="activo"
                    value={formValues.activo}
                    onChange={handleChange}
                  >
                    <option value="true">si</option>
                    <option value="false">no</option>
                  </select>
                  <div className="d-flex justify-content-center">
                    <button className="button m-3">Guardar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="col text-white">
            {loading ? (
              <div className="col-6 offset-3">
                <h3 className="text-white text-center">Cargando...</h3>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <div className="w-100">
                  <table className="fondo table text-white">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Precio</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody id="table_body">
                      {menus.map((menu, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{menu.nombre}</td>
                          <td>{menu.nombcateg}</td>
                          <td>${menu.precio}</td>
                          <td>
                            <button
                              className="btn btn-warning"
                              onClick={() => hola(menu, "actualizar")}
                            >
                              <i
                                className="fa fa-pencil"
                                aria-hidden="true"
                              ></i>
                            </button>
                            <button
                              className="btn btn-danger float-end"
                              onClick={() => hola(menu, "eliminar")}
                            >
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal isOpen={habmodal}>
        <ModalHeader>
          <h3>Actualizar Menu</h3>
        </ModalHeader>

        <ModalBody>
          <div className="form-group">
            <label htmlFor="id">Nombre</label>
            <input
              className="input"
              type="text"
              name="nombre"
              id="nombre"
              value={menuselecc.nombre}
              onChange={handleChangeact}
              readOnly
            />
            <br />
            <label htmlFor="nombre">Categoria</label>
            <select
              name="nombcateg"
              className="input"
              aria-label="Default select example"
              required
              value={formValues.nombcateg}
              onChange={handleChange}
            >
              <option
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                {menuselecc.nombcateg}
              </option>
              {categorias.map((cat) => (
                <option key={cat._id} value={cat.nombre}>
                  {cat.nombre}
                </option>
              ))}
            </select>
            <br />
            <label htmlFor="nombre">Precio</label>
            <input
              className="input"
              type="number"
              min={1}
              max={100000}
              required
              name="precio"
              id="precio"
              value={menuselecc.precio}
              onChange={handleChangeact}
            />
            <br />
            <label htmlFor="capital_bursatil">Imagen</label>
            <input
              className="input"
              type="url"
              required
              name="img"
              id="img"
              value={menuselecc.img}
              onChange={handleChangeact}
            />
            <br></br>
            <label>Activar</label>
            <select
              name="activo"
              value={menuselecc.activo}
              onChange={handleChange}
            >
              <option value="true">si</option>
              <option value="false">no</option>
            </select>
          </div>
        </ModalBody>

        <ModalFooter>
          <button
            className="btn btn-success"
            onClick={() => guardaract(menuselecc, menuselecc._id)}
          >
            Guardar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setHabmodal(!habmodal)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      {/* modal eliminacion */}
      <Modal isOpen={modaldelete}>
        <ModalHeader>
          <p>Desea Eliminar el Menu</p>
        </ModalHeader>

        <ModalBody>{menuselecc.nombre}</ModalBody>

        <ModalFooter>
          <button
            className="btn btn-success"
            onClick={() => eliminar(menuselecc._id)}
          >
            Guardar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModaldelete(!modaldelete)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AdminApp;
