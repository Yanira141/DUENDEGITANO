import { useState } from "react";
import "../../assets/css/main.css";
import Swal from 'sweetalert2';
export default function FormProxActuaciones() {
  const [newActuacion, setNewActuacion] = useState({
    fecha: "",
    lugar: "",
    hora: "",
    descripcion: "",
    direccion: "",
  });
  function handleInput(e) {
    e.preventDefault();
    const newRegistro = {
      ...newActuacion,
      [e.target.name]: e.target.value,
    };
    setNewActuacion(newRegistro);
  }

  function registrar(e) {
    e.preventDefault();
    fetch("http://localhost:3000/actuacion", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newActuacion),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Actuación registrada correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      } else if (response.status === 409) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Actuación ya registrada',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
    setNewActuacion({
    
      hora: "",
      fecha: "",
      descripcion: "",
      lugar: "",
      direccion: "",
    });
  }
  return (
    <>
    <section id="get-started" className="get-started section-bg">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
              <div className="content">
                <h3>Actuaciones</h3>

                <p>
                Tendrás la posibilidad de conocernos y vernos actuar en persona.
                </p>
                
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade">
              <form
                className="php-email-form"
                onSubmit={(event) => registrar(event, newActuacion)}
              >
                <h3><i class="bi bi-calendar-plus"></i> Añade una próxima actuación</h3>

                <div className="row gy-3">
                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="hora"
                      placeholder="Hora"
                      value={newActuacion.hora}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="fecha"
                      placeholder="Fecha"
                      value={newActuacion.fecha}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  
                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="lugar"
                      placeholder="Lugar"
                      value={newActuacion.lugar}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="direccion"
                      placeholder="Dirección exacta"
                      value={newActuacion.direccion}
                      onChange={handleInput}
                      required
                    />
                  </div>



                  
                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="descripcion"
                      placeholder="Descripción"
                      value={newActuacion.descripcion}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <button type="submit">Añadir próxima actuación</button>
                </div>
              </form>
            </div>
          </div>
          </div>
      </section>
    </>
  );
}
