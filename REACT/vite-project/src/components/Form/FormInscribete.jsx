import { useState } from "react";
import "../../assets/css/main.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function FormRegister() {
  const navigate = useNavigate();
  const [newUsuario, setNewUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    telefono: "",
  });
  function handleInput(e) {
    e.preventDefault();
    const newRegistro = {
      ...newUsuario,
      [e.target.name]: e.target.value,
    };
    setNewUsuario(newRegistro);
  }

  function registrar(e) {
    e.preventDefault();
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newUsuario),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuario registrado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      } else if (response.status === 409) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Usuario ya registrado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    setNewUsuario({
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      telefono: "",
    });
  }
  return (
    <>
      <section id="get-started" className="get-started section-bg">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-up"
            >
              <div className="content">
                <h3>¿Ya te has decidido?</h3>

                <h6>
                  {" "}
                  Rellena los campos del formulario de inscripción para darte de
                  alta como alumno en tu escuela de danza.{" "}
                </h6>
                <h6>
                  Te recomendamos acercarte a la escuela para completar la
                  inscripción y formalizar el pago.
                </h6>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade">
              <form
                className="php-email-form"
                onSubmit={(event) => registrar(event, newUsuario)}
              >
                <h3>Inscripción de alumnos</h3>
                <p>¿Es tú primera vez? Regístrate aquí.</p>
                <div className="row gy-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="nombre"
                      className="form-control"
                      placeholder="Nombre"
                      value={newUsuario.nombre}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      name="apellido"
                      className="form-control"
                      placeholder="Apellidos"
                      value={newUsuario.apellido}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      name="telefono"
                      className="form-control"
                      placeholder="Teléfono"
                      value={newUsuario.telefono}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={newUsuario.email}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Contraseña"
                      value={newUsuario.password}
                      onChange={handleInput}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <button type="submit">Inscribirme</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
