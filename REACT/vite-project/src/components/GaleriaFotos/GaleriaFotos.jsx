import "./GaleriaFotos.css";

export default function GaleriaFotos({ imagenes }) {
  return (
    <>
      <div className=" text-center pb-5">
        <div className="cardcursos">
          <img src={`http://localhost:3000/${imagenes.ruta}`} className="card-img-top" alt="..." />
        </div>
      </div>
    </>
  );
}
