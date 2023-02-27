import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";
import { useAuthContext } from "../../../context/AuthContext/logInContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormCambioPassword({

  password,
  passwordRepeat,
  setUsuarios,
}) {
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
          title: "Datos cambiados correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        response.json().then((data) => {
          setUsuarios(data);
        });
      } else if (response.status === 409) {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Usuario ya modificado",
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
   
      password: "",
      passwordRepeat: "",
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
                <h3>Modifica aquí tu contraseña</h3>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade">
              <form className="php-email-form" onSubmit={handleSubmit}>
                <h3>
                  <i className="bi bi-pen"></i> Cambiar contraseña
                </h3>

                <div className="row gy-3">
        

            

            


                  <div className="col-md-12 ">
                    <input
                      type="password"
                      name="password"
                      placeholder={password}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.password && touched.password
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {errors.password && touched.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="password"
                      name="passwordRepeat"
                      placeholder={password}
                      value={values.passwordRepeat}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.password && touched.password
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {errors.passwordRepeat && touched.passwordRepeat && (
                      <p className="error">{errors.passwordRepeat}</p>
                    )}
                  </div>

                  <button type="submit" disabled={isSubmitting}>
                    Modificar mi contraseña
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
