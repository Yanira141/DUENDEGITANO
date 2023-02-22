import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "../../assets/css/main.css"

export default function SamuelGallo() {
  return (
    <>
      <Breadcrumbs title={"Samuel Gallo"} link={"Samuel Gallo"} />
     
      <div className="pb-5">
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div className="col-lg-7 about-img samuel"></div>

            <div className="col-lg-7">
              <h2> </h2>
              <div className="our-story">
                <p className="pt-5">
                  {" "}
                  Desde pequeño nunca quiso bailar flamenco y por eso nunca
                  bailo en la academia, porque antes estaba más enfocada a
                  flamenco, asi que sus padres le apuntaron en la conocida
                  escuela de Hip-Hop D-flow Studios, donde desde muy pequeño
                  estuvo presentandose en castings de grupos de campeonato y con
                  su grupo de Hip-Hop. </p><p>También ha bailado en varios campeonatos
                  tanto a nivel nacional como internacional, ganando varios
                  premios. </p><p>Más adelante empezo con su formación de guitarra en
                  el conservatorio, pero su familia le animo a que se apuntara
                  en el conservatorio de danza para estudiar y conocer más el
                  mundo ya que quería dedicarse a esto.</p><p> Escogio la especialidad
                  de danza contemporanea, ya que era lo mas ralacionado con lo
                  que le gusta que es el Hip-Hop.</p><p> A día de hoy pertenezce a una
                  compañía de Gibraltar, hace poco recibio un premio con mención
                  al mejor bailarín, junto a una beca para irse a Italia a
                  estudiar en verano.
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
