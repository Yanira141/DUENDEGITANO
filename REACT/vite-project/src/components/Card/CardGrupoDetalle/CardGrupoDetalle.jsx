import { useAuthContext } from "../../../context/AuthContext/logInContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./CardGrupoDetalle.css"

export default function CardGrupoDetalle({
  grupos,
  existeGrupo,
  setExisteGrupo,
}) {
  const params = useParams();
  const { authorization } = useAuthContext();
  const { idgrupo } = params;

  async function apuntarGrupo(e) {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:3000/grupo/grupodetalle/${idgrupo}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idusuario: authorization.id }),
      }
    );

    if (response.status === 200) {
      setExisteGrupo(true);

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
  async function borrarGrupo(e) {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:3000/grupo/borrargrupodetalle/${idgrupo}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idusuario: authorization.id }),
      }
    );
    console.log(response.status);
    if (response.status === 200) {
      setExisteGrupo(false);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Borrado del grupo correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "ERROR",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <>
      <section id="about" className="about ">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div className="col-lg-7 about-img imagengrupodetalle"></div>

            <div className="col-lg-7">
              <h2>{grupos.nombre}</h2>
              <div className="our-story">
                <button
                  onClick={existeGrupo ? borrarGrupo : apuntarGrupo}
                  className="btn-get-started text-dark text-decoration-none colorletra"
                >
                  {existeGrupo ? "Borrarme" : "Apuntarme"}
                </button>

                <p className="pt-5">{grupos.descripcion}</p>
                <ul>
                  <li>
                    <i className="bi bi-watch"></i>{" "}
                    <span>{grupos.horario}</span>
                  </li>
                </ul>
                <div className="watch-video d-flex align-items-center position-relative"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
