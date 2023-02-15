import { Link } from "react-router-dom";
import "./CardCursos.css"
import "@/assets/css/main.css"
export default function CardCursos({ curso }) {
  return (
    <>
    <div className="pt-5 text-center">
<div className="cardcursos" >
  <img src="src/assets/imagenes/curso-compas.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{curso.nombre}</h5>
    <div className="meta d-flex align-items-center">
<div className="d-flex align-items-center">
  <span className="ps-2">{curso.profesor}</span>
  <i className="bi bi-person"></i>
</div>
<span className="px-3 text-black-50">/</span>
<div className="d-flex align-items-center">
  <span className="ps-2">{curso.precio}</span>{" "}
  <i className="bi bi-currency-euro"></i>
</div>
<span className="px-3 text-black-50">/</span>
<div className="d-flex align-items-center">
  <span className="ps-2">{curso.hora}</span>{" "}
  <i className="bi bi-alarm"></i>
</div>
</div>


   
    <Link
                  data-aos="fade-up"
                  data-aos-delay="200"
                  to={`/cursos/${curso.id}`}
                  className="btn-get-started text-dark text-decoration-none" 
                >
                  Más detalles
                </Link>
  </div>
</div>
</div>

    </>
  );
}
