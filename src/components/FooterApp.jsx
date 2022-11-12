import React from "react";
import "../css/footer.css";

const FooterApp = () => {
  return (
      <footer className="footer justify-content-center fondo-footer">
        <section className="row container">
            <div className="col-sm-12 col-md-4 col-responsive">
              <img
                src="https://i.ibb.co/wRzS5wH/sabor-en-C-D-gos-1.gif"
                alt="logo panaderia cocu"
                className="w-50"
              />
            </div>
            <div className="col-sm-12 col-md-4 text-light col-responsive">
              <h5>Horarios de atencion:</h5>
              <p className="my-4">
                Lunes a viernes: 09 hs- 18 hs <br />
                Sabado, Domingo y feriados: 09 hs- 14hs
              </p>
            </div>
            <div className="col-sm-12 col-md-4 text-light col-responsive">
              <h5>Seguinos en nuestras redes:</h5>
              <div className="social-container">
                <a
                  href="https://m.facebook.com/?locale=es_LA&_rdr"
                  className="a"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.google.com/" className="a">
                  <i className="fa fa-google" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/" className="a">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="copyright col-sm-12 text-white d-flex justify-content-center col-responsive">
              <div id="copyright">
                &copy; 2022 Página creada por Sabor En Código - Todos los
                derechos reservados.
              </div>
            </div>
        </section>
      </footer>
  );
};

export default FooterApp;