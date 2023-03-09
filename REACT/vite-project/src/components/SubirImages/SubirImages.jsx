import { useState } from "react";
import "./SubirImages.css"

export default function SubirImages() {
  const [titulo, setTitulo] =useState("")
const [file, setFile] = useState("");
function handleInput(e){
  e.preventDefault();
  const formData= new FormData();

formData.append("imagen", file);
formData.append("titulo", titulo)

fetch(`http://localhost:3000/imagenes`, {
  method: "POST",
  body: formData,
}).then((response) => {
  if (response.status === 200) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Imagen subida correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    setTitulo("")
    setFile("")
  }
});

}

  return (
    <>
     <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Subir imágenes</h2>
            <h6>Sube las imágenes al apartado de la galería.</h6>
          </div>
      <div className="mb-3 container pb-5">
        <form onSubmit={handleInput} method="post" encType="multipart/form-data"  className="php-email-form">
   <div className="pb-5"> <input
        className="form-control inputfotos"
          type="text"
          autoComplete="off"
          name="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        /></div>
    <input
  className="form-control inputfotos"
          type="file"
          name="ruta"
          value={undefined}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="btn-get-started text-decoration-none">Subir</button>
        </form>
      </div>
</div></section>





    </>
  );
}
