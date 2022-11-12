import React from "react";
import { NavLink } from "react-router-dom";
import "../css/home.css";
import "animate.css";

const HomeScreen = () => {
  return (
    <div className="container-home">
      <div className="contenedor">
        <div className="row w-100">
          <div className="col-12 frase-home animate__animated animate__fadeInDown mt-1 p-5">
            <hr />
            <h1>"Quédate con quien se preocupe si ya comiste."</h1>
            <h2>
              Sabor en código nació como una idea de interactuar entre el hambre
              de los desvelos trabajando en el proyecto y lo que implica atrás
              de lo visual que el cliente disfruta.
            </h2>

            {/* CARROUSEL */}
            <div
              id="carouselExampleCaptions"
              className="carousel slide carousel-destacado"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={
                      "https://images.pexels.com/photos/7845171/pexels-photo-7845171.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    className="image-carousel d-block w-100"
                    alt={"menu1"}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Una Experiencia Única🍽</h5>
                    <p>Platos programados para deleitar tus sentidos💻</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={
                      "https://images.pexels.com/photos/7830651/pexels-photo-7830651.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    className="image-carousel d-block w-100"
                    alt={"menu2"}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>No pierdas el Tiempo!⌚</h5>
                    <p>
                      Ingenieria aplicada a los alimentos para alcanzar nuevos
                      Horizontes🌅
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={
                      "https://images.pexels.com/photos/7655095/pexels-photo-7655095.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    className="image-carousel d-block w-100"
                    alt={"menu3"}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Realiza tu pedido en un solo click!🖱</h5>
                    <p>No te arrepentiras de sumarte a la Experiencia🎉</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* FIN DE CARROUSEL */}

            <h3 className="mt-4">
              Nuestro único objetivo es que alimentes tu cuerpo, pero tambien tu
              alma. Te invitamos a ver nuestro menú.
            </h3>

            <NavLink to="/menu">
              <button className="btn btn-success mt-4">Ver menú</button>
            </NavLink>
            <hr />
            <div className="d-flex justify-content-center">
              <form className="col-md-8 col-sm-12 d-flex mt-5">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
