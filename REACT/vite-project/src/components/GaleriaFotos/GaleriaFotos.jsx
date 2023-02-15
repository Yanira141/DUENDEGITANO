import "./GaleriaFotos.css";

export default function GaleriaFotos({ imagenes }) {
  return (
    <>
   
      <div className="pt-5 text-center">
        <div className="cardcursos">
          <img src={imagenes.ruta} className="card-img-top" alt="..." />
        </div>
      </div>
      
    </>
  );
}
