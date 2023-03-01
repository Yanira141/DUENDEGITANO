import { Link } from "react-router-dom";
import "../../assets/css/main.css";
import { useAuthContext } from "../../context/AuthContext/logInContext";

export default function Header() {
  const { authorization, logout } = useAuthContext();
  return (
    <>
      {authorization.rol === 1 ? (
        <div>
          <header id="header" className="header d-flex align-items-center">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
              <Link
                to="/"
                className="logo d-flex align-items-center text-decoration-none"
              >
                <h1>
                  Duende Gitano<span>.</span>
                </h1>
              </Link>

              <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
              <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
              <nav id="navbar" className="navbar">
                <ul>
                  {authorization.rol === 1 && (
                    <li>
                      <Link
                        className="text-decoration-none"
                        to={`paneladministrador/${authorization.id}`}
                      >
                        Panel Administrador
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link className="text-decoration-none" to="galeria">
                      Galería
                    </Link>
                  </li>
                  {!authorization.email ? (
                    <li>
                      <Link className="text-decoration-none" to="login">
                        Iniciar sesión
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link
                        onClick={logout}
                        className="text-decoration-none"
                        to="/"
                      >
                        Cerrar sesión
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </header>
        </div>
      ) : (
        <div>
          <header id="header" className="header d-flex align-items-center">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
              <Link
                to="/"
                className="logo d-flex align-items-center text-decoration-none"
              >
                <h1>
                  Duende Gitano<span>.</span>
                </h1>
              </Link>

              <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
              <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <Link className="text-decoration-none" to="grupos">
                      Grupos
                    </Link>
                  </li>

                  <li>
                    <Link className="text-decoration-none" to="cursos">
                      Cursos
                    </Link>
                  </li>

                  <li>
                    <Link className="text-decoration-none" to="escuela">
                      Escuela
                    </Link>
                  </li>

                  <li>
                    <Link className="text-decoration-none" to="galeria">
                      Galería
                    </Link>
                  </li>

                  {authorization.rol === 2 && (
                    <li>
                      <Link
                        className="text-decoration-none"
                        to={`panelusuario/${authorization.id}`}
                      >
                        Panel usuario
                      </Link>
                    </li>
                  )}
                  {authorization.rol === 1 && (
                    <li>
                      <Link
                        className="text-decoration-none"
                        to={`paneladministrador/${authorization.id}`}
                      >
                        Panel Administrador
                      </Link>
                    </li>
                  )}

                  {!authorization.email ? (
                    <li>
                      <Link className="text-decoration-none" to="login">
                        Iniciar sesión
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link
                        onClick={logout}
                        className="text-decoration-none"
                        to="/"
                      >
                        Cerrar sesión
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </header>
        </div>
      )}
    </>
  );
}
