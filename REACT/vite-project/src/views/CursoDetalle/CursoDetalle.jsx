import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardCursoDetalle from "../../components/Card/CardCursoDetalle";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CursoDetalle (){
    const [cursos, setCursos] = useState(null);
    const params = useParams();
    useEffect(function () {
      async function fetchCursos() {
        const response = await fetch(
          `http://localhost:3000/cursos/${params.idcurso}`
      
        );
        const detalles = await response.json();
        setCursos(detalles);
      }
  
      fetchCursos();
    }, []);
    
    return(
        <>
        <Breadcrumbs title={"Detalles del curso"} link={"Detalles del curso"}/>
       
        <div className="pb-5" >
        {cursos ? (
          <CardCursoDetalle
            cursos={cursos}
          />
        ) : (
          <p>Cargando...</p>
        )}
      </div>
        </>
    )
}