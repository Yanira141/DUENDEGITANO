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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/logInContext";
import { Link } from "react-router-dom";

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

      <div class="accordion container" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
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
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
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
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
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
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            


            
            </div>
          </div>
        </div>
      </div>





      <div class="accordion container" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Añade un nuevo curso
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Añade una nueva actuación
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Añade un nuevo grupo
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>





 
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
      <div className="container">
        <Link
          className="btn-get-started text-decoration-none"
          to="/usuariosadmin"
        >
          Listado de usuarios
        </Link>
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

      <FormCursos setCursos={setCursos} />

      {cursos.map((curso, index) => (
        <div key={index} className="pb-5">
          <CardCursos curso={curso} deleteCurso={deleteCurso} />
        </div>
      ))}

      <FormProxActuaciones setActuacion={setActuacion} />
      <div className="d-flex flex-column container pb-5">
        {actuacion.map((actuacion, index) => (
          <div key={index}>
            <CardActu actuacion={actuacion} deleteActuacion={deleteActuacion} />
          </div>
        ))}
      </div>
      <div className="pb-5">
        <FormAddGrupo setGrupos={setGrupos} />
      </div>
      {grupos.map((grupos, index) => (
        <div className="pb-5" key={index}>
          <CardGrupo grupos={grupos} deleteGrupo={deleteGrupo} />
        </div>
      ))}
      <SubirImages />
    </>
  );
}
