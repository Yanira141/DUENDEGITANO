import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardProfesDetalle from "../../components/Card/CardProfesDetalle/CardProfesDetalle";

export default function CristinaGallo() {
  return (
    <>
      <Breadcrumbs title={"Cristina Gallo"} link={"Cristina Gallo"} />
     
      <div className="pb-5">
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div className="col-lg-7 about-img cristi"></div>

            <div className="col-lg-7">
              <h2> </h2>
              <div className="our-story">
                <p className="pt-5">
                  Desde que estaba en la barriga de mi madre, escuchaba y sentía
                  la música y el baile, y desde muy chiquita he pasado muchas
                  horas sentada viendo las clases. De ahí surge mi gusto por la
                  danza en general, tanto es así que mi madre decide apuntarme
                  al Conservatorio para iniciar profesionalmente mis estudios.
                  Hasta día de hoy, después de 15 años, he estudiado el Grado
                  Profesional de Danza Española y de Flamenco, y este año
                  finalizo el Grado Superior de Danza Española en Pedagogía.
                  Además, siempre me ha gustado compaginar los estudios con
                  cursos, masterclass y casting que me aporten conocimiento y
                  experiencias a mi formación. Algunos de ellos han sido: La
                  Lupi, Rocío Molina, José Carmona, EL Farru, Miguel Ángel
                  Corbacho, Antonio Canales, David Coria, Marcos Morales, Rubén
                  Olmos y Eloy Pericet, entre otros muchos. Cabe destacar, que
                  pertenecí a la Compañía Joven Ballet Flamenco Español de
                  Álvaro Méndez, la Compañía de Rosi de Alva, y a la del
                  reconocido bailarín de Danza Española, Antonio Márquez.
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
