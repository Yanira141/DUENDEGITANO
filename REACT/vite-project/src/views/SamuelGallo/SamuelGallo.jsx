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
                  Desde pequeño nunca quise bailar flamenco y por eso nunca
                  baile en la academia, porque antes estaba más enfocada a
                  flamenco, asi que mis padres me apuntaron en la conocida
                  escuela de Hip-Hop D-flow Studios, donde desde muy pequeño
                  estuve presentandome en castings de grupos de campeonato y con
                  mi grupo de Hip-Hop también he bailado en varios campeonatos
                  tanto a nivel nacional como internacional, ganando varios
                  premios. Más adelante empece con mi formación de guitarra en
                  el conservatorio, pero mi familia me animo a que me apuntara
                  en el conservatorio de danza para estudiar y conocer mas el
                  mundo ya que quería dedicarme a esto, escogí la especialidad
                  de danza contemporanea, ya que era lo mas ralacionado con lo
                  que me gusta que es el Hip-Hop. A día de hoy pertenezco a una
                  compañía de Gibraltar, hace poco recibí un premio con mención
                  al mejor bailarín, junto a una beca para irme a Italia a
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
