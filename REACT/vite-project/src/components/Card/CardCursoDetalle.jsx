import { useAuthContext } from "../../context/AuthContext/logInContext";
import { useParams } from "react-router-dom";

export default function CardCursoDetalle({ cursos }) {
  const params = useParams();
  const { authorization } = useAuthContext();
  const { idcurso } = params;

  async function apuntarCurso(e) {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:3000/cursos/cursosdetalle/${authorization.id}`,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(idcurso),
      }
    );

    if (response.status === 200) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Apuntado en el curso correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      alert("No te has podido apuntar en el curso");
    }
  }
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div className="col-lg-7 about-img imagencursodetalle"></div>

            <div className="col-lg-7">
              <h2>{cursos.nombre}</h2>
              <div className="our-story">
                <button
                  onClick={apuntarCurso}
                  className="btn-get-started text-dark text-decoration-none"
                >
                  ¡Apuntarme!
                </button>

                <p className="pt-5">{cursos.descripcion}</p>
                <ul>
                  <li>
                    {" "}
                    <span>{cursos.precio}</span>
                    <i className="bi bi-currency-euro"></i>
                  </li>
                  <li>
                    <i className="bi bi-watch"></i> <span>{cursos.hora}</span>
                  </li>
                  <li>
                    <i className="bi bi-person"></i>{" "}
                    <span>{cursos.profesor}</span>
                  </li>
                </ul>
                <p>{cursos.fecha}</p>

                <div className="watch-video d-flex align-items-center position-relative"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
