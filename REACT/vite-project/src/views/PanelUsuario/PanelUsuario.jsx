import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FormCambio from "../../components/Form/FormCambio/FormCambio";
import FormDelete from "../../components/Form/FormDelete/FormDelete";
import FormDescripcion from "../../components/Form/FormDescripcion/FormDescripcion";
import CardCursos from "../../components/Card/CardCursos/CardCursos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/logInContext";
import CardGrupo from "../../components/Card/CardGrupo/CardGrupo";
import FormCambioPassword from "../../components/Form/FormCambioPassword/FormCambioPassword";
import "./PanelUsuario.css"

export default function PanelUsuario() {
  const [apuntadoCurso, setApuntadoCurso] = useState(null);
  const { authorization } = useAuthContext();
  const [perteneceGrupo, setPerteneceGrupo] = useState(null);
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
            <h2>Datos personales</h2>
            <h6></h6>
          </div>
          <div className="accordion container" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Modifica tus datos personales
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div>
                    {usuarios ? (
                      <FormCambio
                        nombre={usuarios.nombre}
                        apellido={usuarios.apellido}
                        telefono={usuarios.telefono}
                        email={usuarios.email}
                        password={"*****"}
                        passwordRepeat={"*****"}
                        setUsuarios={setUsuarios}
                      />
                    ) : (
                      <div className="text-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Modifica tu contraseña
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div>
                    {usuarios ? (
                      <FormCambioPassword
                        password={"*****"}
                        passwordRepeat={"*****"}
                        setUsuarios={setUsuarios}
                      />
                    ) : (
                      <div className="text-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Grupos en los que estoy apuntado</h2>
            
          </div>
      <div className="accordion accordion-flush container" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
             Estos son los grupos a los que asistes
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              
       
          {perteneceGrupo ? (
            perteneceGrupo.map((perteneceGrupo, index) => (
              <div key={index}>
                <CardGrupo grupos={perteneceGrupo} />
              </div>
            ))
          ) : (
            <p>¡Aún no estas apuntado a ningún grupo!</p>
          )}
      


            </div>
          </div>
        </div>
       
       </div></div></section>
      



       <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Cursos en los que estoy apuntado</h2>
           
          </div>


      <div className="accordion accordion-flush container" id="accordionFlushExample">
      <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
             Estos son los cursos a los que vas a asistir
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
             

      
          {apuntadoCurso ? (
            apuntadoCurso.map((apuntadoCurso, index) => (
              <div key={index}>
                <CardCursos curso={apuntadoCurso} />
              </div>
            ))
          ) : (
            <p>¡Aún no estas apuntado a ningún curso!</p>
          )}
       


            </div>
          </div>
        </div>
</div>
</div></section>





<FormDescripcion />
    
      <FormDelete />
    </>
  );
}
