import "./CardActu.css"
import { useAuthContext } from "../../../context/AuthContext/logInContext";


export default function CardActu({ actuacion, deleteActuacion }){
    const { authorization } = useAuthContext();

    return(
        <>
        <div class="container pt-5">
		<div class="row row-striped">
			<div class="col-2 text-right">
				<h1 class="display-4"><span class=" badge-secondary">{actuacion.fecha}</span></h1>
				
			</div>
			<div class="col-10">
				<h3 class="text-uppercase"><strong>{actuacion.lugar}</strong></h3>
				<ul class="list-inline">
				
					<li class="list-inline-item"><i class="bi bi-clock"></i> {actuacion.hora}</li>
					<li class="list-inline-item"><i class="bi bi-geo"></i>{actuacion.direccion}</li>
				</ul>
				<p>{actuacion.descripcion}</p>
		
          	</div>
            <div className="d-flex row">
              {authorization.rol === 1 && (
            <button onClick={()=>deleteActuacion(actuacion.id)} className="btn-get-started text-dark text-decoration-none">
              BORRAR
            </button>
          )}
          </div>
          	</div>
	</div>
        </>
    )
}