import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";
import { useAuthContext } from "../../../context/AuthContext/logInContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormDescripcion({ descripcion }) {
  const { authorization } = useAuthContext();
  const params = useParams();

  async function onSubmit(values, actions) {
    fetch(`http://localhost:3000/user/actualizar/${params.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values, authorization),
    }).then((response) => {
      console.log(values);
      if (response.status === 400) {
        alert("Error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Comentario enviado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (response.status === 409) {
        alert("Comentario ya enviado");
      }
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      descripcion: "",
    },
    validationSchema: BasicFormSchema,

    onSubmit,
  });
  return (
    <>
      <section id="get-started" className="get-started section-bg">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-5" data-aos="fade">
              <form className="php-email-form" onSubmit={handleSubmit}>
                <div className="row gy-3">
                  <div className="col-md-12 ">
                    <textarea
                      type="text"
                      name="descripcion"
                      placeholder="Escribenos aquí tus emociones..."
                      value={values.descripcion}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.descripcion && touched.descripcion
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {errors.descripcion && touched.descripcion && (
                      <p className="error">{errors.descripcion}</p>
                    )}
                  </div>

                  <button type="submit" disabled={isSubmitting}>
                    Enviar
                  </button>
                </div>
              </form>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-up"
            >
              <div className="content">
                <h3>Cuentanos un poco...</h3>

                <p>
                  ¿Qué significa el baile para ti?, ¿qué sientes cuando subes al
                  escenario? ...
                </p>
                <p>
                  ¡Ten en cuenta que lo que nos cuentes, aparecerá en nuestra
                  página web!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
