import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function CristinaMarquez() {
  return (
    <>
      <Breadcrumbs title={"Cristina Marquez"} link={"Cristina Marquez"} />

      <div className="pb-5">
        <section id="about" className="about ">
          <div className="container" data-aos="fade-up">
            <div className="row position-relative">
              <div className="col-lg-7 about-img cristina"></div>

              <div className="col-lg-7">
                <h2> </h2>
                <div className="our-story">
                  <p className="pt-5">
                    Cristina Márquez desde pequeña ha mostrado un interés y un
                    afán por el baile innato, que no le proviene de generaciones
                    anteriores. Su madre la apuntó en el Conservatorio de Danza
                    para poder tener los estudios oficiales.
                  </p>
                  <p>
                    {" "}
                    Ha realizado representaciones de obras relevantes como el
                    Amor Brujo o el Sombrero de tres picos en el Teatro
                    Cervantes.{" "}
                  </p>
                  <p>
                    Una vez finalizado los estudios, realizó el CAP Curso de
                    Adaptación Pedagógica en la Universidad de Málaga,
                    convalidando su carrera con la pedagogía existente en la
                    actualidad.
                  </p>
                  <p>
                    Posteriormente y con una edad muy temprana decidió abrir su
                    propia escuela que, desde 1988, sigue abierta gracias a la
                    fidelidad del alumnado y sus familiares.
                  </p>

                  <div className="watch-video d-flex align-items-center position-relative"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
