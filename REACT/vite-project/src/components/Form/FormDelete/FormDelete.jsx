import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";
import { useAuthContext } from "../../../context/AuthContext/logInContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormDelete() {
  const { authorization, logout } = useAuthContext();
  const params = useParams();

  async function onSubmit(values, actions) {
    fetch(`http://localhost:3000/user/borrar/${params.id}`, {
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
          title: "Usuario eliminado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        logout();
      } else if (response.status === 409) {
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Usuario ya eliminado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  }

  const {
  
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
                <h3>
                  {" "}
                  Borra tu cuenta, ¡estaremos encantados si algún día quieres
                  volver!
                </h3>
                <div className="row gy-3">
                  <div className="col-md-12 "></div>

                  <button type="submit" disabled={isSubmitting}>
                    Borrar cuenta
                  </button>
                </div>
              </form>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-up"
            >
              <div className="content">
                <h3>¿Te vas?</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
