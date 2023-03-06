import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FormCursos from "../../components/Form/FormCursos";
import FormProxActuaciones from "../../components/Form/FormProxActuaciones";
import FormCambio from "../../components/Form/FormCambio/FormCambio";
import CardCursos from "../../components/Card/CardCursos/CardCursos";
import CardGrupo from "../../components/Card/CardGrupo/CardGrupo";
import FormAddGrupo from "../../components/Form/FormAddGrupo/FormAddGrupo";
import CardActu from "../../components/Card/CardActu/CardActu";
import SubirImages from "../../components/SubirImages/SubirImages";
import FormCambioPassword from "../../components/Form/FormCambioPassword/FormCambioPassword";
import ListaAdminUser from "../../components/ListaAdminUser/ListaAdminUser";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/logInContext";

import "./PanelAdministrador.css";

export default function PanelAdministrador() {
  const { authorization } = useAuthContext();
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

  const [cursos, setCursos] = useState([]);

  useEffect(function () {
    async function fetchCursos() {
      const response = await fetch(`http://localhost:3000/cursos/all`);
      const detalles = await response.json();
      setCursos(detalles);
    }

    fetchCursos();
  }, []);

  const [actuacion, setActuacion] = useState([]);

  useEffect(function () {
    async function fetchActuacion() {
      const response = await fetch(`http://localhost:3000/actuacion/all`);
      const detalles = await response.json();
      setActuacion(detalles);
    }

    fetchActuacion();
  }, []);

  const [grupos, setGrupos] = useState([]);

  useEffect(function () {
    async function fetchGrupos() {
      const response = await fetch(`http://localhost:3000/grupo/all`);
      const detalles = await response.json();
      setGrupos(detalles);
    }

    fetchGrupos();
  }, []);

  const [usuariosElim, setUsuariosElim] = useState([]);

  useEffect(function () {
    async function fetchUserElim() {
      const response = await fetch(`http://localhost:3000/user/alleliminado`);
      const detalles = await response.json();
      setUsuariosElim(detalles);
    }

    fetchUserElim();
  }, []);

  async function deleteGrupo(x) {
    fetch(`http://localhost:3000/grupo/borrar/${x}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    }).then((response) => {
      if (response.status === 400) {
        alert("Error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Grupo eliminado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        response.json().then((data) => {
          setGrupos(data);
        });
      } else if (response.status === 409) {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Grupo ya eliminado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  async function deleteCurso(x) {
    fetch(`http://localhost:3000/cursos/borrar/${x}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    }).then((response) => {
      if (response.status === 400) {
        alert("Error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Curso eliminado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        response.json().then((data) => {
          setCursos(data);
        });
      } else if (response.status === 409) {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Curso ya eliminado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  async function deleteActuacion(x) {
    fetch(`http://localhost:3000/actuacion/borrar/${x}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    }).then((response) => {
      if (response.status === 400) {
        alert("Error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Actuacion eliminada correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        response.json().then((data) => {
          setActuacion(data);
        });
      } else if (response.status === 409) {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Actuacion ya eliminada",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
  return (
    <>
      <Breadcrumbs title={"Panel Administrador"} link={"Panel Administrador"} />
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
            <h2>Añade eventos y grupos</h2>
            <h6></h6>
          </div>
          <div className="accordion container" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Añade un nuevo curso
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <FormCursos setCursos={setCursos} />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Añade una nueva actuación
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <FormProxActuaciones setActuacion={setActuacion} />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Añade un nuevo grupo
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <FormAddGrupo setGrupos={setGrupos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Edita eventos y grupos</h2>
            <h6></h6>
          </div>

          <div
            className="accordion accordion-flush container"
            id="accordionFlushExample"
          >
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
                  Edita los cursos
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {cursos.map((curso, index) => (
                    <div key={index} className="pb-5">
                      <CardCursos curso={curso} deleteCurso={deleteCurso} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                  Edita las actuaciones
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="d-flex flex-column container pb-5">
                    {actuacion.map((actuacion, index) => (
                      <div key={index}>
                        <CardActu
                          actuacion={actuacion}
                          deleteActuacion={deleteActuacion}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Edita los grupos
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {grupos.map((grupos, index) => (
                    <div className="pb-5" key={index}>
                      <CardGrupo grupos={grupos} deleteGrupo={deleteGrupo} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Alumnos</h2>
            <h6>Estos son los alumnos apuntados y no apuntados en la academia.</h6>
          </div>

      <div className="accordion container" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Listado de usuarios
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             
 
       

      <div className="container pb-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Email</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {usuariosElim.map((usuariosElim, index) => (
              <tr key={index}>
                <ListaAdminUser usuarios={usuariosElim} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
      <SubirImages />
    </>
  );
}
