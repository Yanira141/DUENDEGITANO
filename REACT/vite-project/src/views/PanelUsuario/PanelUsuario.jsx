import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FormCambio from "../../components/Form/FormCambio/FormCambio";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormDelete from "../../components/Form/FormDelete/FormDelete";
import FormDescripcion from "../../components/Form/FormDescripcion/FormDescripcion";
import Eventos from "../../components/Eventos/Eventos";



export default function PanelUsuario() {
  const [usuarios, setUsuarios] = useState(null);
  const params = useParams();
  useEffect(function () {
    async function fetchUsuarios() {
      const response = await fetch(
        `http://localhost:3000/user/usuarios/${params.id}`
      );
      const detalles = await response.json();
      setUsuarios(detalles);
    }

    fetchUsuarios();
  }, []);

  return (
    <>
      <Breadcrumbs title={"Panel usuario"} link={"Panel usuario"} />
      <FormDescripcion/>
      <div>
        {usuarios ? (
          <FormCambio usuarios={usuarios} setUsuarios={setUsuarios} nombre={usuarios.nombre} apellido={usuarios.apellido} telefono={usuarios.telefono} email={usuarios.email} password={"*****"} />
        ) : (
          <p>Cargando...</p>
        )}
      </div>
<Eventos/>
      <FormDelete/>
    </>
  );
}
