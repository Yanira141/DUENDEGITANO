import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FormCursos from "../../components/Form/FormCursos";
import FormProxActuaciones from "../../components/Form/FormProxActuaciones";
import FormCambio from "../../components/Form/FormCambio/FormCambio";
import CardCursos from "../../components/Card/CardCursos/CardCursos";

import CardGrupo from "../../components/Card/CardGrupo/CardGrupo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormAddGrupo from "../../components/Form/FormAddGrupo/FormAddGrupo";
import CardOpiniones from "../../components/Card/CardOpiniones/CardOpiniones";
import { useAuthContext } from "../../context/AuthContext/logInContext";
import CardActu from "../../components/Card/CardActu/CardActu";
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

  // const [descripcion, setDescripcion] = useState([]);
  // useEffect(function () {
  //   async function fetchDescripcion() {
  //     const response = await fetch(`http://localhost:3000/user/all`);
  //     const detalles = await response.json();
  //     setDescripcion(detalles);
  //   }
  //   fetchDescripcion();
  // }, []);

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
      <div>
        {usuarios ? (
          <FormCambio
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
      {/* <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Algunos comentarios anónimos de nuestros alumnos</h2>

            <div> */}
              {/* <CardOpiniones descripcion={usuarios.descripcion} /> */}
            {/* </div>
          </div>
        </div>
      </section> */}
      
      <FormCursos />
     
          {cursos.map((curso, index) => (
            <div key={index} className="pb-5">
              <CardCursos curso={curso} deleteCurso={deleteCurso} />
            </div>
          ))}
      
      <FormProxActuaciones />
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
      <div className="pb-5">
        <FormAddGrupo />
      </div>
      {grupos.map((grupos, index) => (
        <div className="pb-5" key={index}>
          <CardGrupo grupos={grupos} deleteGrupo={deleteGrupo} />
        </div>
      ))}
    </>
  );
}
