import { useState } from "react";
import Mapa from "../../Mapa/Mapa";
import Swal from "sweetalert2";

export default function FormContacto() {
  const [newEmail, setNewEmail] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  function handleInput(e) {
    e.preventDefault();
    const newContacto = {
      ...newEmail,
      [e.target.name]: e.target.value,
    };
    setNewEmail(newContacto);
  }
  function contactar(e) {
    e.preventDefault();
    fetch("http://localhost:3000/user/email", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newEmail),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Email enviado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (response.status === 409) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Email ya enviado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    setNewEmail({
      nombre: "",
      email: "",
      mensaje: "",
    });
  }
  return (
    <>
      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>¡PRIMER DÍA GRATIS!</h2>
            <p>
              Contacta con nosotros y ven a probar, ¡el primer día es gratis!
            </p>
          </div>
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-map"></i>
                    <h3>Dirección</h3>
                    <p> C. Manuel Giménez Lombardo, 1, 29014 Málaga</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-envelope"></i>
                    <h3>Email</h3>
                    <p>cristinagallomarquez@gmail.com</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-telephone"></i>
                    <h3>Teléfono</h3>
                    <p>619 38 64 39</p>
                  </div>
                </div>
              </div>

              <div className="row gy-4 mt-1">
                <div className="col-lg-6 ">
                  <Mapa />
                </div>

                <div className="col-lg-6">
                  <form                   
                    className="php-email-form"
                    onSubmit={(event) => contactar(event, newEmail)}
                  >
                    <div className="row gy-4">
                      <div className="col-lg-6 form-group">
                        <input
                          type="text"
                          name="nombre"
                          className="form-control"
                          id="name"
                          placeholder="Introduce tu nombre"
                          value={newEmail.nombre}
                          onChange={handleInput}
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Introduce tu email"
                          value={newEmail.email}
                          onChange={handleInput}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="mensaje"
                       type="text"
                        placeholder="¿Cómo te podemos ayudar?"
                        value={newEmail.mensaje}
                        onChange={handleInput}
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Cargando</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        ¡Tu mensaje ha sido enviado, gracias!
                      </div>
                    </div>
                  
                      <button type="submit">Enviar mensaje</button>
                  
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
