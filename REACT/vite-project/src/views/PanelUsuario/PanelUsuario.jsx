import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FormCambio from "../../components/Form/FormCambio/FormCambio";
import FormDelete from "../../components/Form/FormDelete/FormDelete";
import FormDescripcion from "../../components/Form/FormDescripcion/FormDescripcion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <FormDescripcion />
      <div>
        {usuarios ? (
          <FormCambio
            usuarios={usuarios}
            setUsuarios={setUsuarios}
            nombre={usuarios.nombre}
            apellido={usuarios.apellido}
            telefono={usuarios.telefono}
            email={usuarios.email}
            password={"*****"}
          />
        ) : (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Próximos eventos</h2>
            <h6>Estos son los cursos a los que vas a asistir</h6>
          </div>
---
          </div></section>
      <FormDelete />
    </>
  );
}
