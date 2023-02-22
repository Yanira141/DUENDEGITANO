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
                <i class="bi bi-person-bounding-box"></i> {curso.profesor}
              </li>
            </ul>
            {/* <p>{actuacion.descripcion}</p> */}
          </div>
          <div className="d-flex row">
            <Link
              data-aos="fade-up"
              data-aos-delay="200"
              to={`/cursos/${curso.id}`}
              className="btn-get-started text-dark text-decoration-none text-center"
            >
              Más detalles
            </Link>
          </div>
          <div className="d-flex row">
            {authorization.rol === 1 && (
              <button
                onClick={() => deleteCurso(curso.id)}
                className="btn-get-started text-dark text-decoration-none"
              >
                Borrar
              </button>
            )}
          </div>
          <div className="d-flex row">
            {authorization.rol === 1 && (
              <Link
                data-aos="fade-up"
                data-aos-delay="200"
                to={`/editcurso/${curso.id}`}
                className="btn-get-started text-dark text-decoration-none text-center"
              >
                Editar
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
