import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";
import { useAuthContext } from "../../../context/AuthContext/logInContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


export default function FormEditGrupo({
  nombre,
  descripcion,
  horario,
 
  setGrupo,
}) {
  const { authorization } = useAuthContext();
  const params = useParams();
  async function onSubmit(values, actions) {
    fetch(`http://localhost:3000/grupo/actualizar/${params.id}`, {
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
          setGrupo(data);
        })
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
      horario: "",
      nombre: "",
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
              <form
                className="php-email-form"
                onSubmit={handleSubmit}
              >
                <h3>
                  <i className="bi bi-journals"></i> Añade un nuevo grupo
                </h3>

                <div className="row gy-3">
                  <div className="col-md-12 ">
                    <input
                      type="text"
                 
                      name="nombre"
                      placeholder={nombre}
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.nombre && touched.nombre
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {errors.nombre && touched.nombre && (
                      <p className="error">{errors.nombre}</p>
                    )}
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                  
                      name="horario"
                      placeholder={horario}
                      value={values.horario}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.horario && touched.horario
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {errors.horario && touched.horario && (
                      <p className="error">{errors.horario}</p>
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

                  <button type="submit" disabled={isSubmitting}>Añadir grupo</button>
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
