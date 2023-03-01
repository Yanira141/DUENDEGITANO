import "./FormDelete.css"
import { useAuthContext } from "../../../context/AuthContext/logInContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

export default function FormDelete() {
  const { authorization, logout } = useAuthContext();
  const params = useParams();

  const [visible, setVisible] = useState("d-none");

  function toggleVisible() {
    if (visible === "d-none") {
      setVisible("");
    } else {
      setVisible("d-none");
    }
  }

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
          position: "top-end",
          icon: "warning",
          title: "Usuario ya eliminado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  }

  return (
    <>
      <section id="get-started" className="get-started section-bg">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-5" data-aos="fade">
              <h3>
                {" "}
                Borra tu cuenta, ¡estaremos encantados si algún día quieres
                volver!
              </h3>
              <div className="row gy-3">
                <div className="col-md-12 "></div>

                <button className="btn-get-started text-decoration-none" onClick={() => toggleVisible()}>Borrar cuenta</button>
                <div className={`alert alert-danger" role="alert ${visible}`}>
                <div className="d-flex justify-content-evenly"> ¿Estás seguro?
                 
                  <button className="text-decoration-none bordessiono" onClick={() => onSubmit()}><i className="bi bi-check-lg"></i></button>
                  <button className="text-decoration-none bordessiono" onClick={() => toggleVisible()}><i className="bi bi-x-lg"></i></button>
                </div></div>
              </div>
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
