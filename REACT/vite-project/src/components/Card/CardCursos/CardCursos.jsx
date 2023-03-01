import { Link } from "react-router-dom";
import "./CardCursos.css";
import "@/assets/css/main.css";
import { useAuthContext } from "../../../context/AuthContext/logInContext";

export default function CardCursos({ curso, deleteCurso }) {
  const { authorization } = useAuthContext();
  return (
    <>
      <div className="container pt-5">
        <div className="row row-striped">
          <div className="col-2 text-right">
            <h1 className="display-4">
              <span className=" badge-secondary">{curso.fecha}</span>
            </h1>
          </div>
          <div className="col-10">
            <h3 className="text-uppercase">
              <strong>{curso.nombre}</strong>
            </h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="bi bi-clock"></i> {curso.hora}
              </li>
              <li className="list-inline-item">
                <i className="bi bi-person-bounding-box"></i> {curso.profesor}
              </li>
            </ul>
          
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex row">
              <Link
                data-aos="fade-up"
                data-aos-delay="200"
                to={`/cursos/${curso.id}`}
              >
                <i className="bi bi-plus-circle"></i>
              </Link>
            </div>
            <div className="d-flex row">
              {authorization.rol === 1 && (
                <Link
                  data-aos="fade-up"
                  data-aos-delay="200"
                  to={`/editcurso/${curso.id}`}
                >
                  <i className="bi bi-pencil"></i>
                </Link>
              )}
            </div>
            <div className="d-flex row">
              {authorization.rol === 1 && (
                <Link
                  data-aos="fade-up"
                  data-aos-delay="200"
                  to={`/usuarioscursos/${curso.id}`}
                >
                 <i className="bi bi-eye"></i>
                </Link>
              )}
            </div>
            <div className="d-flex row">
              {authorization.rol === 1 && (
                <button
                  onClick={() => deleteCurso(curso.id)}
                  className="basura"
                >
                  <i className="bi bi-trash3"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
