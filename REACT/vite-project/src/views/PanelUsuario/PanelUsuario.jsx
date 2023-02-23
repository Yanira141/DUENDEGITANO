import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FormCambio from "../../components/Form/FormCambio/FormCambio";
import FormDelete from "../../components/Form/FormDelete/FormDelete";
import FormDescripcion from "../../components/Form/FormDescripcion/FormDescripcion";
import CardCursos from "../../components/Card/CardCursos/CardCursos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/logInContext";
import CardGrupo from "../../components/Card/CardGrupo/CardGrupo";

export default function PanelUsuario() {
  const [apuntadoCurso, setApuntadoCurso] = useState([]);
  const { authorization } = useAuthContext();
  const [perteneceGrupo, setPerteneceGrupo] = useState([])
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
    async function fetchApuntado() {
      const response = await fetch(
        `http://localhost:3000/cursos/all/${authorization.id}`
      );
      const apuntar = await response.json();
      setApuntadoCurso(apuntar);
    }
    async function fetchPertenece() {
      const response = await fetch(
        `http://localhost:3000/grupo/all/${authorization.id}`
      );
      const pertenece = await response.json();
      setPerteneceGrupo(pertenece);
    }
    fetchPertenece();
    fetchApuntado();
    fetchUsuarios();

  }, []);

  return (
    <>
      <Breadcrumbs title={"Panel usuario"} link={"Panel usuario"} />
      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Grupos en los que estoy apuntado</h2>
            <h6>Estos son los grupos a los que asistes</h6>
          </div>
          {perteneceGrupo ? (
            perteneceGrupo.map((perteneceGrupo, index) => (
              <div key={index}>
                <CardGrupo grupos={perteneceGrupo} />
              </div>
            ))
          ) : (
            <p>Cargando</p>
          )}
        </div>
      </section>
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
            <h2>Cursos en los que estoy apuntado</h2>
            <h6>Estos son los cursos a los que vas a asistir</h6>
          </div>
          {apuntadoCurso ? (
            apuntadoCurso.map((apuntadoCurso, index) => (
              <div key={index}>
                <CardCursos curso={apuntadoCurso} />
              </div>
            ))
          ) : (
            <p>Cargando</p>
          )}
        </div>
      </section>
      <FormDelete />
    </>
  );
}
