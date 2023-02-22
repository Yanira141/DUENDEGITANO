export default function FormEditGrupo() {
  return (
    <>
      <section id="get-started" className="get-started section-bg">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div className="col-lg-5" data-aos="fade">
              <form
                className="php-email-form"
                onSubmit={(event) => registrar(event, newGrupo)}
              >
                <h3>
                  <i className="bi bi-journals"></i> Añade un nuevo grupo
                </h3>

                <div className="row gy-3">
                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      placeholder="Nombre"
                      value={newGrupo.nombre}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="horario"
                      placeholder="Horario"
                      value={newGrupo.horario}
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
                      value={newGrupo.descripcion}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <button type="submit">Añadir grupo</button>
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
