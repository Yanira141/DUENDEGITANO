export default function CardProfesDetalle({ descripcion, imagen }) {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div className="col-lg-7 about-img"></div>

            <div className="col-lg-7">
              <h2> </h2>
              <div className="our-story">
                <p className="pt-5">{descripcion}</p>

                <div className="watch-video d-flex align-items-center position-relative"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
