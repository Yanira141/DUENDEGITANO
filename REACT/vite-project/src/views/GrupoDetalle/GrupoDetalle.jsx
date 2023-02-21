import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardGrupoDetalle from "../../components/Card/CardGrupoDetalle/CardGrupoDetalle";
import { useAuthContext } from "../../context/AuthContext/logInContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GrupoDetalle (){
  const [existeGrupo, setExisteGrupo] = useState(false);
  const { authorization } = useAuthContext();
  const [buttonDelete, setButtonDelete] = useState([]);
    const [grupos, setGrupos] = useState(null);
    const params = useParams();
    
    useEffect(function () {
      async function fetchGrupos() {
        const response = await fetch(
          `http://localhost:3000/grupo/${params.idgrupo}`
      
        );
        const detalles = await response.json();
        setGrupos(detalles);
      }
  
      fetchGrupos();
    }, []);
    
    useEffect(function () {
      const { idgrupo } = params;
      async function fetchGrupos() {
        const response = await fetch(
          `http://localhost:3000/grupo/buttondeletegrupo/${idgrupo}/${authorization.id}`
      
        );
        if(response.status===404){
          setExisteGrupo(false)
        }
     
      
        setExisteGrupo(true);
      }
  
      fetchGrupos();
    }, []);
    
    return(
        <>
        <Breadcrumbs title={"Detalles del grupo"} link={"Detalles del grupo"}/>
       
        <div className="pb-5" >
        {grupos ? (
          <CardGrupoDetalle
            grupos={grupos} setExisteGrupo={setExisteGrupo} existeGrupo={existeGrupo}
          />
        ) : (
          <p>Cargando...</p>
        )}
      </div>
        </>
    )
}