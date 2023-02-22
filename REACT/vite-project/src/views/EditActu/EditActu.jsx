import { useEffect, useState } from "react";
import FormEditActu from "../../components/Form/FormEditActu/FormEditActu";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useParams } from "react-router-dom";

export default function EditActu() {
  const [actuacion, setActuacion] = useState(null);
  const params = useParams();
  useEffect(function () {
    async function fetchActuacion() {
      const response = await fetch(
        `http://localhost:3000/actuacion/${params.id}`
      );
      const detalles = await response.json();
      setActuacion(detalles);
    }

    fetchActuacion();
  }, []);
  return (
    <>
      <Breadcrumbs title={"Edita una actuación"} link={"Edita una actuación"} />
      <div>
        {actuacion ? (
          <FormEditActu
            hora={actuacion.hora}
            fecha={actuacion.fecha}
            direccion={actuacion.direccion}
            descripcion={actuacion.descripcion}
            lugar={actuacion.lugar}
            setActuacion={setActuacion}
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
