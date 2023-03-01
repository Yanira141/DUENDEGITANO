import "./GaleriaFotos.css";
import { useAuthContext } from "../../context/AuthContext/logInContext";


export default function GaleriaFotos({ imagen, borrarImagen }) {
  const { authorization } = useAuthContext();
  const imagenGaleria = {
    backgroundImage: `url(http://localhost:3000/${imagen.ruta})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "50vh",
  };
  return (
    <>


      <div className=" text-center pb-5">
        <div className="cardcursos">
          <div style={imagenGaleria}></div>
  
          <div className="cardgaleria">
            <h5>{imagen.titulo}</h5>
            {authorization.rol === 1 && (
              <button
                onClick={() => borrarImagen(imagen.id)}
                className="bordessiono"
              >
                <i className="bi bi-trash3"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
