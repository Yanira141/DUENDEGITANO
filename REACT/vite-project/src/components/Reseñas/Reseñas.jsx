import "./Reseñas.css";

export default function Reseñas({ usuarios }) {
  return (
    <>
      <div class="bocadillo-cuadrado tex-center pb-5">
        <div className="container pt-3">
      <p className="nombreUser"><b>{usuarios.nombre}</b></p>
      <p>{usuarios.descripcion}</p>
      
      </div>
      </div>
      
    </>
  );
}

