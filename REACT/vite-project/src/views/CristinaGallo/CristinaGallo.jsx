import Blockquote from "../../components/Blockquote/Blockquote";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";


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
             

                <div className="our-story">
                <Blockquote frase={"Desde que estaba en la barriga de mi madre, escuchaba y sentía la música y el baile."} nombre={"Cristina Gallo"}/>
                  <p className="pt-5">
                    Desde muy chiquita ha pasado
                    muchas horas sentada viendo las clases. De ahí surge su
                    gusto por la danza en general, tanto es así que su madre
                    decide apuntarla al Conservatorio para iniciar
                    profesionalmente sus estudios.
                  </p>
                  <p>
                    Hasta día de hoy, después de 15 años, ha estudiado el Grado
                    Profesional de Danza Española y de Flamenco, y este año
                    finaliza el Grado Superior de Danza Española en Pedagogía.
                  </p>
                  <p>
                    Además, siempre le ha gustado compaginar los estudios con
                    cursos, masterclass y casting que le aporten conocimiento y
                    experiencias a su formación. Algunos de ellos han sido: La
                    Lupi, Rocío Molina, José Carmona, EL Farru, Miguel Ángel
                    Corbacho, Antonio Canales, David Coria, Marcos Morales,
                    Rubén Olmos y Eloy Pericet, entre otros muchos.
                  </p>
                  <p>
                    {" "}
                    Cabe destacar, que pertenecio a la Compañía Joven Ballet
                    Flamenco Español de Álvaro Méndez, la Compañía de Rosi de
                    Alva, y a la del reconocido bailarín de Danza Española,
                    Antonio Márquez.
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
