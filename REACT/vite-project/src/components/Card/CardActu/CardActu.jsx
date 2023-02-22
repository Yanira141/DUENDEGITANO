import "./CardActu.css";
import { useAuthContext } from "../../../context/AuthContext/logInContext";
import { Link } from "react-router-dom";

export default function CardActu({ actuacion, deleteActuacion }) {
  const { authorization } = useAuthContext();

  return (
    <>
      <div className="container pt-5">
        <div className="row row-striped">
          <div className="col-2 text-right">
            <h1 className="display-4">
              <span className=" badge-secondary">{actuacion.fecha}</span>
            </h1>
          </div>
          <div className="col-10">
            <h3 className="text-uppercase">
              <strong>{actuacion.lugar}</strong>
            </h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="bi bi-clock"></i> {actuacion.hora}
              </li>
              <li className="list-inline-item">
                <i className="bi bi-geo"></i>
                {actuacion.direccion}
              </li>
            </ul>
            <p>{actuacion.descripcion}</p>
          </div>
          <div className="d-flex justify-content-between">
          <div className="d-flex row">
            {authorization.rol === 1 && (
              <Link
                data-aos="fade-up"
                data-aos-delay="200"
                to={`/editactu/${actuacion.id}`}
               
              >
                 <i class="bi bi-pencil"></i>
              </Link>
            )}
          </div>
          <div className="d-flex row">
            {authorization.rol === 1 && (
              <button
                onClick={() => deleteActuacion(actuacion.id)}
                className="basura"
              >
                <i class="bi bi-trash3"></i>
              </button>
            )}
          </div>
          
          </div>
        </div>
      </div>
    </>
  );
}
