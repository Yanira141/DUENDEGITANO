import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import FormRegister from "../../components/Form/FormInscribete";

import { useAuthContext } from "../../context/AuthContext/logInContext";

import CardProfes from "../../components/Card/CardProfes/CardProfes";

import CardActu from "../../components/Card/CardActu/CardActu";
// import Reviews from "../../components/Reviews/Reviews";
import Reseñas from "../../components/Reseñas/Reseñas";


export default function Home() {
  const { authorization, logout } = useAuthContext();
  const [actuacion, setActuacion] = useState([]);

  useEffect(function () {
    async function fetchActuacion() {
      const response = await fetch(`http://localhost:3000/actuacion/all`);
      const detalles = await response.json();
      setActuacion(detalles);
    }

    fetchActuacion();
  }, []);




  const [usuarios, setUsuarios] = useState([]);

  useEffect(function () {
    async function fetchUser() {
      const response = await fetch(`http://localhost:3000/user/all`);
      const detalles = await response.json();
      setUsuarios(detalles);
    }

    fetchUser();
  }, []);







  return (
    <>
      <div>
        <Hero />

        <section id="constructions" className="constructions">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Conoce a nuestros profesionales</h2>

              <h6>
                Detrás de un buen bailarín... hay un gran profesor de danza.
              </h6>
            </div>
            <div className="container d-flex justify-content-around">
              <CardProfes />
            </div>
          </div>
        </section>

   
        <section id="constructions" className="constructions">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Nuestras actuaciones</h2>

              <h6>
                Tendrás la posibilidad de conocernos y vernos actuar en persona.
              </h6>
            </div>
            <div className="d-flex flex-column ">
              {actuacion.map((actuacion, index) => (
                <div key={index}>
                  <CardActu actuacion={actuacion} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="constructions" className="constructions">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Reseñas de Google</h2>

              <h6>Los años nos avalan y las opiniones de nuestros alumnos también</h6>
            </div>
            <div className="container d-flex justify-content-around pb-5">
     
              {usuarios.map((usuarios, index) => (
                <div key={index}>
              <Reseñas usuarios={usuarios}/>
               </div>
               ))}
            
            </div>
          </div>
        </section>
        {!authorization.email ? <FormRegister /> : <div></div>}
      </div>
    </>
  );
}
