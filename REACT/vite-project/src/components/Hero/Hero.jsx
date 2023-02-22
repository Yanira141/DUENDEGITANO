import { Link } from "react-router-dom";
import "../../assets/css/main.css";

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">
                  Bienvenid@s a la Academia de Danza <span>Duende Gitano</span>
                </h2>
                <p data-aos="fade-up">
                  Tengo claro que quiero empezar a bailar, ¿por dónde empiezo?
                </p>
                <Link
                  data-aos="fade-up"
                  data-aos-delay="200"
                  to="contacto"
                  className="btn-get-started text-decoration-none"
                >
                  ¡Pregúntanos!
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-item active carrusel1 "></div>
          <div className="carousel-item carrusel2"></div>
          <div className="carousel-item carrusel3"></div>
          <div className="carousel-item carrusel4"></div>
          <div className="carousel-item carrusel5"></div>

          <a
            className="carousel-control-prev text-decoration-none"
            href="#hero-carousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            className="carousel-control-next text-decoration-none"
            href="#hero-carousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>
    </>
  );
}
