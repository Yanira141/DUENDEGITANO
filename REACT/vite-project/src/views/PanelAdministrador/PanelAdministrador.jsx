import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FormCursos from "../../components/Form/FormCursos";
import FormProxActuaciones from "../../components/Form/FormProxActuaciones";
import FormCambio from "../../components/Form/FormCambio/FormCambio";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PanelAdministrador() {
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
      <Breadcrumbs title={"Panel Administrador"} link={"Panel Administrador"} />
      <div>
        {usuarios ? (
          <FormCambio nombre={usuarios.nombre} apellido={usuarios.apellido} telefono={usuarios.telefono} email={usuarios.email} password={"*****"} />
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <FormCursos />
      <FormProxActuaciones />
    </>
  );
}
