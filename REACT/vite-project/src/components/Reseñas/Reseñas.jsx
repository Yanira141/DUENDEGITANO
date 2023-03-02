import "./Reseñas.css";

export default function Reseñas({ usuarios }) {
  return (
    <>
      <div class="bocadillo-cuadrado tex-center">{usuarios.descripcion}</div>
      <div><p>{usuarios.nombre}</p></div>
    </>
  );
}
