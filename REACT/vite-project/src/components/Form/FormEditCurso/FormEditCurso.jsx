export default function FormEditActu(){
    return(
        <>
          <section id="get-started" className="get-started section-bg">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-5" data-aos="fade">
              <form
                className="php-email-form"
                onSubmit={(event) => registrar(event, newCurso)}
              >
                <h3>
                  <i className="bi bi-journals"></i> Añade un nuevo curso
                </h3>

                <div className="row gy-3">
                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      placeholder="Nombre"
                      value={newCurso.nombre}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="precio"
                      placeholder="Precio"
                      value={newCurso.precio}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="hora"
                      placeholder="Hora"
                      value={newCurso.hora}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="fecha"
                      placeholder="Fecha"
                      value={newCurso.fecha}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="profesor"
                      placeholder="Profesor"
                      value={newCurso.profesor}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="descripcion"
                      placeholder="Descripción"
                      value={newCurso.descripcion}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <button type="submit">Añadir curso</button>
                </div>
              </form>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-up"
            >
              <div className="content">
                <h3>Cursos y talleres</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}