import "./App.css";
import "./assets/fonts/fontawesome-free-6.1.2-web/css/all.min.css";
import "./assets/css/reset.css";
import "./assets/css/scroll.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import SobreMi from "./pages/SobreMi";
import Page404 from "./pages/Page404";
import Portafolio from "./pages/Portafolio";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import "./assets/css/loader.css";

function App() {
  return (
    <div className="layout">
      {/* <!-- Barra lateral (info Usuario) --> */}
      <aside className="layout__aside">
        <section className="aside__user-info">
          {/* <!-- informacion General del Usuario --> */}
          <div className="user-info__general">
            <div className="user-info__container-imagen">
              <img
                src="/img/foto-perfil-1.png"
                alt="Foto perfil Usuario"
                className="user-info__image"
              />
              {/* <!-- aqui iira el seudoelemento after(ultimo Hijo de contenedor)  fondo de la imagen --> */}
            </div>
          </div>

          {/* <!-- Links a redes Sociales --> */}
          <div className="user-info__links">
            <ul className="links__social">
              <li className="social__option">
                <a href="#" className="social__link">
                  <i className="social__icon fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="social__option">
                <a
                  href="https://github.com/MMiigguueellGS"
                  target="_blank"
                  className="social__link"
                >
                  <i className="social__icon fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- boton del cv --> */}
          <div className="user-info__buttons">
            <a href="#" className="user-info__btn">
              Descargar CV
            </a>
          </div>

          {/* <!-- pie de pagina --> */}
          <footer className="user-info__footer">
            &copy;2023 Miguel Angel Guevara Simon
          </footer>
        </section>
      </aside>

      {/* <!-- Menu de navegacion --> */}
      <ul className="menu__list">
          <li className="menu__option">
            <Link to="/" className="menu__link ">
              <i className="menu__icon fa-solid fa-house "></i>
              <span className="menu__overlay">Home</span>
            </Link>
          </li>
          <li className="menu__option">
            <Link to="/sobreMi" className="menu__link">
              <i className="menu__icon fa-solid fa-user "></i>
              <span className="menu__overlay">Sobre mi</span>
            </Link>
          </li>

          <li className="menu__option">
            <Link to="/portafolio" className="menu__link">
              <i className="menu__icon fa-solid fa-briefcase "></i>
              <span className="menu__overlay">Portafolio</span>
            </Link>
          </li>
          <li className="menu__option">
            <Link to="/blog" className="menu__link">
              <i className="menu__icon fa-solid fa-book "></i>
              <span className="menu__overlay">Blog</span>
            </Link>
          </li>
          <li className="menu__option">
            <Link to="/contacto" className="menu__link">
              <i className="menu__icon fa-solid fa-envelope "></i>
              <span className="menu__overlay">Contacto</span>
            </Link>
          </li>
        </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
