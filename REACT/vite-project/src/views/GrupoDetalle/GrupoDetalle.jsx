import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardGrupoDetalle from "../../components/Card/CardGrupoDetalle/CardGrupoDetalle";
import { useAuthContext } from "../../context/AuthContext/logInContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GrupoDetalle() {
  const [existeGrupo, setExisteGrupo] = useState(false);
  const { authorization } = useAuthContext();
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
      if (response.status === 404) {
        setExisteGrupo(false);
      }else{
        setExisteGrupo(true);
      }


    }

    fetchGrupos();
  }, []);

  return (
    <>
      <Breadcrumbs title={"Detalles del grupo"} link={"Detalles del grupo"} />

      <div className="pb-5">
        {grupos ? (
          <CardGrupoDetalle
            grupos={grupos}
            setExisteGrupo={setExisteGrupo}
            existeGrupo={existeGrupo}
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
  );
}
