export default function SubirImages() {
  return (
    <>
     <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Subir imágenes</h2>
            <h6>Sube las imágenes al apartado de la galería.</h6>
          </div>
      <div class="mb-3 container pb-5">
        <input
          class="form-control btn-get-started "
          type="file"
          id="formFileMultiple"
          multiple
        />
      </div>
</div></section>
    </>
  );
}
