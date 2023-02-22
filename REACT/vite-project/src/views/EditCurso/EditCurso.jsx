import { useEffect, useState } from "react";
import FormEditCurso from "../../components/Form/FormEditCurso/FormEditCurso";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useParams } from "react-router-dom";


export default function EditCurso(){
    const [curso, setCurso] = useState(null);
    const params = useParams();
    useEffect(function () {
      async function fetchCurso() {
        const response = await fetch(`http://localhost:3000/cursos/${params.id}`);
        const detalles = await response.json();
        setCurso(detalles);
      }
  
      fetchCurso();
    }, []);
    return(
        <>
 
         <Breadcrumbs title={"Edita un curso"} link={"Edita un curso"} />
      <div>
        {curso ? (
          <FormEditCurso
            hora={curso.hora}
            fecha={curso.fecha}
            profesor={curso.profesor}
            descripcion={curso.descripcion}
            nombre={curso.nombre}
            precio={curso.precio}
            setCurso={setCurso}
          />
        ) : (
            <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
        </>
    )
}