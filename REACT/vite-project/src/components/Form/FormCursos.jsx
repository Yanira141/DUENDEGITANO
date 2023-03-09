import { useState } from "react";
import "../../assets/css/main.css";
import Swal from "sweetalert2";
export default function FormCursos({setCursos}) {
  const [newCurso, setNewCurso] = useState({
    nombre: "",
    precio: "",
    hora: "",
    fecha: "",
    descripcion: "",
    profesor: "",
  });
  function handleInput(e) {
    e.preventDefault();
    const newRegistro = {
      ...newCurso,
      [e.target.name]: e.target.value,
    };
    setNewCurso(newRegistro);
  }

  function registrar(e) {
    e.preventDefault();
    fetch("http://localhost:3000/cursos", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newCurso),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Curso registrado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });

        response.json().then((data) => {
 
          setCursos(data);
        });
      } else if (response.status === 409) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Curso ya registrado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    setNewCurso({
      nombre: "",
      precio: "",
      hora: "",
      fecha: "",
      descripcion: "",
      profesor: "",
    });
  }
  return (
    <>
      <section id="get-started" className="get-started section-bg">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-5" data-aos="fade">
              <form
                className="php-email-form"
                onSubmit={(event) => registrar(event, newCurso)}
              >
                <h3>
                  <i className="bi bi-journals"></i> Añade un nuevo curso
                </h3>

                <div className="row gy-3">
                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      placeholder="Nombre"
                      value={newCurso.nombre}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="precio"
                      placeholder="Precio"
                      value={newCurso.precio}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="hora"
                      placeholder="Hora"
                      value={newCurso.hora}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="fecha"
                      placeholder="Fecha"
                      value={newCurso.fecha}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="profesor"
                      placeholder="Profesor"
                      value={newCurso.profesor}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="col-md-12 ">
                    <textarea
                      type="text"
                      className="form-control"
                      name="descripcion"
                      placeholder="Descripción"
                      value={newCurso.descripcion}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <button type="submit">Añadir curso</button>
                </div>
              </form>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-up"
            >
              <div className="content">
                <h3>Cursos y talleres</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
