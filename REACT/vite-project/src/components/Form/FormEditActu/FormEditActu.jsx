import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";
import { useAuthContext } from "../../../context/AuthContext/logInContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormEditActu({
  hora,
  fecha,
  lugar,
  direccion,
  descripcion,

  setActuacion,
}) {
  const { authorization } = useAuthContext();
  const params = useParams();
  async function onSubmit(values, actions) {
    fetch(`http://localhost:3000/actuacion/actualizar/${params.id}`, {
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
          title: "Datos cambiados correctamente",
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
          title: "Actuación ya modificada",
          showConfirmButton: false,
          timer: 1500,
        });
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
      hora: "",
      fecha: "",
      lugar: "",
      direccion: "",
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
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-up"
            >
              <div className="content">
                <h3>Actuaciones</h3>

                <h6>
                  Necesitas cambiar algún dato de la actuación, editala aquí.
                </h6>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade">
              <form className="php-email-form" onSubmit={handleSubmit}>
                <h3>
                  <i className="bi bi-calendar-plus"></i> Edita esta actuación
                </h3>

                <div className="row gy-3">
                  <div className="col-md-12 ">
                    <input
                      type="text"
                      name="hora"
                      placeholder={hora}
                      value={values.hora}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.hora && touched.hora
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {errors.hora && touched.hora && (
                      <p className="error">{errors.hora}</p>
                    )}
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      name="fecha"
                      placeholder={fecha}
                      value={values.fecha}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.fecha && touched.fecha
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {errors.fecha && touched.fecha && (
                      <p className="error">{errors.fecha}</p>
                    )}
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      name="lugar"
                      placeholder={lugar}
                      value={values.lugar}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.lugar && touched.lugar
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {errors.lugar && touched.lugar && (
                      <p className="error">{errors.lugar}</p>
                    )}
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      name="direccion"
                      placeholder={direccion}
                      value={values.direccion}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.direccion && touched.direccion
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {errors.direccion && touched.direccion && (
                      <p className="error">{errors.direccion}</p>
                    )}
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      name="descripcion"
                      placeholder={descripcion}
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
                    Añadir próxima actuación
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
