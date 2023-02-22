import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardCursos from "../../components/Card/CardCursos/CardCursos";
import { useEffect, useState } from "react";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(function () {
    async function fetchCursos() {
      const response = await fetch(`http://localhost:3000/cursos/all`);
      const detalles = await response.json();
      setCursos(detalles);
    }

    fetchCursos();
  }, []);
  return (
    <>
      <Breadcrumbs title={"Cursos"} link={"Cursos"} />
      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Talleres</h2>

            <h6>
              Bailar nunca fue tan fácil... ¡y más con nuestros cursos para
              reforzar los conocimientos!
            </h6>
            <h6>Aprende a bailar con nosotros paso a paso.</h6>
          </div>{" "}
        </div>

        {cursos.map((curso, index) => (
          <div key={index}>
            <CardCursos curso={curso} />
          </div>
        ))}
      </section>
    </>
  );
}
