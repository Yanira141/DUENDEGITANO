import { Link } from "react-router-dom";
import "./CardCursos.css"
import "@/assets/css/main.css"
import { useAuthContext } from "../../../context/AuthContext/logInContext";



export default function CardCursos({ curso, deleteCurso }) {
  const { authorization } = useAuthContext();
  return (

<>
<div class="container pt-5">
		<div class="row row-striped">
			<div class="col-2 text-right">
				<h1 class="display-4"><span class=" badge-secondary">{curso.fecha}</span></h1>
				
			</div>
			<div class="col-10">
				<h3 class="text-uppercase"><strong>{curso.nombre}</strong></h3>
				<ul class="list-inline">
				
					<li class="list-inline-item"><i class="bi bi-clock"></i> {curso.hora}</li>
					<li class="list-inline-item"><i class="bi bi-geo"></i>{curso.profesor}</li>
        
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
          {(authorization.rol === 1) &&(
                <button onClick={()=>deleteCurso(curso.id)} className="btn-get-started text-dark text-decoration-none">BORRAR</button>
                )}
             </div>
          	</div>
	</div>
</>


















  );
}
