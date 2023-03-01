import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import GaleriaFotos from "../../components/GaleriaFotos/GaleriaFotos";
import { useEffect, useState } from "react";

import { useAuthContext } from "../../context/AuthContext/logInContext";

export default function Galería() {


  const { authorization } = useAuthContext();

  const [imagenes, setImagenes] = useState([]);

  useEffect(function () {
    async function fetchImagenes() {
      const response = await fetch(`http://localhost:3000/imagenes/all`);
      const detalles = await response.json();
      setImagenes(detalles);
    }

    fetchImagenes();
  }, []);


  async function borrarImagen(id) {
    const response = await fetch(
      `http://localhost:3000/imagenes/borrar/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({authorization: authorization.id, token: authorization.token }),
      }
    );
    console.log(response.status);
    if (response.status === 200) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Imagen borrada correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      response.json().then((data) => {
        setImagenes(data);
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "ERROR",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  return (
    <>
      <Breadcrumbs title={"Galeria"} link={"Galeria"} />
      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Galería de Fotos</h2>

            <h6>Si tu sueño es bailar, deja de soñar y hazlo.</h6>
          </div>{" "}
        </div>
        <div className="d-flex flex-wrap d-grip gap-5 container">
          {imagenes.map((imagen, index) => (
            <div key={index}>
              <GaleriaFotos imagen={imagen} borrarImagen={borrarImagen} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
