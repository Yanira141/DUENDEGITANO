import { useState } from "react";

import Swal from "sweetalert2";
export default function FormAddGrupo({setGrupos}) {
  const [newGrupo, setNewGrupo] = useState({
    nombre: "",
    descripcion: "",
    horario: "",
  });
  function handleInput(e) {
    e.preventDefault();
    const newRegistro = {
      ...newGrupo,
      [e.target.name]: e.target.value,
    };
    setNewGrupo(newRegistro);
  }

  function registrar(e) {
    e.preventDefault();
    fetch("http://localhost:3000/grupo", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newGrupo),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Grupo registrado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        
        response.json().then((data) => {
 
          setGrupos(data);
        });
      } else if (response.status === 409) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Grupo ya registrado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    setNewGrupo({
      nombre: "",
      descripcion: "",
      horario: "",
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
                onSubmit={(event) => registrar(event, newGrupo)}
              >
                <h3>
                  <i className="bi bi-journals"></i> Añade un nuevo grupo
                </h3>

                <div className="row gy-3">
                  <div className="col-md-12 ">
                    <input
                      type="text"
                      autoComplete="off"
                      className="form-control"
                      name="nombre"
                      placeholder="Nombre"
                      value={newGrupo.nombre}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      autoComplete="off"
                      className="form-control"
                      name="horario"
                      placeholder="Horario"
                      value={newGrupo.horario}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <textarea
                      type="text"
                      autoComplete="off"
                      className="form-control"
                      name="descripcion"
                      placeholder="Descripción"
                      value={newGrupo.descripcion}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <button type="submit">Añadir grupo</button>
                </div>
              </form>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-up"
            >
              <div className="content">
                <h3>Añade un nuevo grupo</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
