import { useEffect, useState } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useParams } from "react-router-dom";
import FormEditGrupo from "../../components/Form/FormEditGrupo/FormEditGrupo";

export default function EditGrupo() {
  const [grupo, setGrupo] = useState(null);
  const params = useParams();
  useEffect(function () {
    async function fetchGrupo() {
      const response = await fetch(`http://localhost:3000/grupo/${params.id}`);
      const detalles = await response.json();
      setGrupo(detalles);
    }

    fetchGrupo();
  }, []);
  return (
    <>
      <Breadcrumbs title={"Edita un grupo"} link={"Edita un grupo"} />
      <div>
        {grupo ? (
          <FormEditGrupo
            horario={grupo.horario}
            descripcion={grupo.descripcion}
            nombre={grupo.nombre}
            setGrupo={setGrupo}
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
