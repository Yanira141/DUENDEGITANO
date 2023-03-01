import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext/logInContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./CardGrupo.css"

export default function CardGrupo({ grupos, deleteGrupo }) {
  const params = useParams();
  const { authorization } = useAuthContext();
  const { idgrupo } = params;

  async function apuntarGrupo(e) {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:3000/grupos/grupodetalle/${idgrupo}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idusuario: authorization.id }),
      }
    );

    if (response.status === 200) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Apuntado en el grupo correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Regístrate o inicia sesión para apuntarte",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <>
      <div className="container pt-5">
        <div className="row row-striped">
          <div className="col-10">
            <h3 className="text-uppercase">
              <strong>{grupos.nombre}</strong>
            </h3>

            <p>{grupos.descripcion}</p>
          </div>
          <div className="d-flex justify-content-between">
          <div className="d-flex row">
            <Link
              data-aos="fade-up"
              data-aos-delay="200"
              to={`/grupos/${grupos.id}`}
             
            >
             <i className="bi bi-plus-circle"></i>
            </Link>
          </div>
          <div className="d-flex row">
            {authorization.rol === 1 && (
              <Link
                data-aos="fade-up"
                data-aos-delay="200"
                to={`/editgrupo/${grupos.id}`}
               
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
                  to={`/usuariosgrupos/${grupos.id}`}
                >
                 <i className="bi bi-eye"></i>
                </Link>
              )}
            </div>
          <div className="d-flex row">
            {authorization.rol === 1 && (
              <button
                onClick={() => deleteGrupo(grupos.id)}
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
