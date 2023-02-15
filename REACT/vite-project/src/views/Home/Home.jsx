import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import FormRegister from "../../components/Form/FormInscribete";
import HistoriaAlumnos from "../../components/HistoriaAlumnos/HistoriaAlumnos";
import ProxActuaciones from "../../components/Card/ProxActuaciones";
import { useAuthContext } from "../../context/AuthContext/logInContext";

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
    }, [])
  return (
    <>
    
      <div>
        <Hero />
        <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Últimas noticias</h2>
            <p>Estas son nuestras próximas actuaciones ...</p>
          </div>
          <div className="d-flex justify-content-evenly">
        {actuacion.map((actuacion, index) => (
            <div key={index}>
              <ProxActuaciones actuacion={actuacion}/>
              </div>
          ))}
          </div></div></section>
       
        <HistoriaAlumnos/>
        {!authorization.email ? (
        <FormRegister/>
        ): (<div></div>)}
      </div>

     
    </>
  );
}
