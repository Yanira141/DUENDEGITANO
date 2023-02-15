import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Mapa from "../../components/Mapa/Mapa";
import "../../assets/css/main.css"

export default function Contacto() {
  return (
    <>
    <Breadcrumbs title={"Contactar"} link={"Contactar"}/>
    <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>¡PRIMER DÍA GRATIS!</h2>
            <p>Contacta con nosotros y ven a probar, ¡el primer día es gratis!</p>
          </div>
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-map"></i>
              <h3>Dirección</h3>
              <p> C. Manuel Giménez Lombardo, 1, 29014 Málaga</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-envelope"></i>
              <h3>Email</h3>
              <p>cristinagallomarquez@gmail.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-telephone"></i>
              <h3>Teléfono</h3>
              <p>619 38 64 39</p>
            </div>
          </div>

        </div>

        <div className="row gy-4 mt-1">

          <div className="col-lg-6 ">
            <Mapa/>
          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row gy-4">
                <div className="col-lg-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Introduce tu nombre" required/>
                </div>
                <div className="col-lg-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Introduce tu email" required/>
                </div>
              </div>
            
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="¿Cómo te podemos ayudar?" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Cargando</div>
                <div className="error-message"></div>
                <div className="sent-message">¡Tu mensaje ha sido enviado, gracias!</div>
              </div>
              <div className="text-center"><button type="submit">Enviar mensaje</button></div>
            </form>
          </div>

        </div>

      </div>

</section>
</div></section>
    </>
  );
}
