import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/logInContext";
import "../../assets/css/main.css";

export default function FormLogin() {
  const { login, authorization } = useAuthContext();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleCredentials(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  useEffect(() => {
  
    if (authorization.email) {
      navigate("/");
    }
  }, [authorization]);

  return (
    <section id="get-started" className="get-started section-bg">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
              <div className="content">
                <h3>¿Ya te has decidido?</h3>

                <p>
           
                  Rellena los campos del formulario de inscripción para darte de
                  alta como alumno en tu escuela de danza.{" "}
                </p>
                <p>
                  Te recomendamos acercarte a la escuela para completar la
                  inscripción y formalizar el pago.
                </p>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade">
            <form
              className="php-email-form"
              onSubmit={(e) => login(e, credentials)}
            >
              <h3>Accede con tus datos anteriores.</h3>

              <div className="row gy-3">
                <div className="col-md-12 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleCredentials}
                    required
                  />
                </div>

                <div className="col-md-12 ">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Contraseña"
                    value={credentials.password}
                    onChange={handleCredentials}
                    required
                  />
                </div>

                <button type="submit">Iniciar sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
