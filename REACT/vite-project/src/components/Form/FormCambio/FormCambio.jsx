import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";
import { useAuthContext } from "../../../context/AuthContext/logInContext";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';


export default function FormCambio({
  nombre,
  apellido,
  telefono,
  email,
  password,
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
          position: 'top-end',
          icon: 'success',
          title: 'Datos cambiados correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      } else if (response.status === 409) {
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Usuario ya modificado',
          showConfirmButton: false,
          timer: 1500
        })
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
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      password: "",
    },
    validationSchema: BasicFormSchema,

    onSubmit,
  });

  return (
    <>
    

      <section id="get-started" className="get-started section-bg">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
              <div className="content">
                <h3>Modifíca aquí tus datos</h3>

             
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade">
              <form
                className="php-email-form"
                onSubmit={handleSubmit}
              >
                <h3><i className="bi bi-pen"></i> Edita la información de tu perfil</h3>
               
                <div className="row gy-3">
                  <div className="col-md-12">
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
                     {errors.name && touched.name && (
                <p className="error">{errors.name}</p>
              )}
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      name="apellido"
                     
                      placeholder={apellido}
                      value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.apellido && touched.apellido
                    ? "input-error form-control"
                    : "form-control"
                }
                    />
                    {errors.apellido && touched.apellido && (
                <p className="error">{errors.apellido}</p>
              )}
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      name="telefono"
                    
                      placeholder={telefono}
                      value={values.telefono}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.telefono && touched.telefono
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                     {errors.telefono && touched.telefono && (
                <p className="error">{errors.telefono}</p>
              )}
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="email"
                     
                      name="email"
                      placeholder= {email}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="password"
                      
                      name="password"
                      placeholder= {password}
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

                  <button type="submit"  disabled={isSubmitting}>Modificar mis datos</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>







    </>
  );
}
