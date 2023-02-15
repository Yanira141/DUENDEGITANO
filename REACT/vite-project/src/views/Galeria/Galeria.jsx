import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import GaleriaFotos from "../../components/GaleriaFotos/GaleriaFotos";
import { useEffect, useState } from "react";


export default function Galería(){
    const [imagenes, setImagenes] = useState([]);

    useEffect(function () {
      async function fetchImagenes() {
        const response = await fetch(`http://localhost:3000/imagenes/all`);
        const detalles = await response.json();
        setImagenes(detalles);
      }
  
      fetchImagenes();
    }, []);
    return(
        <>
        <Breadcrumbs title={"Galeria"} link={"Galeria"}/>
        <div className="d-flex flex-wrap d-grip gap-5 container">
        {imagenes.map((imagenes, index) => (
            <div key={index}>
              <GaleriaFotos imagenes={imagenes} />
            </div>
          ))}
          </div>
        </>
    )
}