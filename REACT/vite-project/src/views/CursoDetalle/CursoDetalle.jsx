import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardCursoDetalle from "../../components/Card/CardCursoDetalle";
import { useAuthContext } from "../../context/AuthContext/logInContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CursoDetalle (){
  const [existeCurso, setExisteCurso]= useState(false)
  const { authorization } = useAuthContext();
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


    useEffect(function () {
      const { idcurso } = params;
      async function fetchCurso() {
        const response = await fetch(
          `http://localhost:3000/cursos/buttondeletecurso/${idcurso}/${authorization.id}`
        );
        if (response.status === 404) {
          setExisteCurso(false);
        }else{
          setExisteCurso(true);
        }
  
  
      }
  
      fetchCurso();
    }, []);
  

    
    return(
        <>
        <Breadcrumbs title={"Detalles del curso"} link={"Detalles del curso"}/>
       
        <div className="pb-5" >
        {cursos ? (
          <CardCursoDetalle
            cursos={cursos}
            setExisteCurso={setExisteCurso}
            existeCurso={existeCurso}
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