import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import { useEffect, useState } from "react";
import CardGrupo from "../../components/Card/CardGrupo/CardGrupo";

export default function Grupos() {
  const [grupos, setGrupos] = useState([]);

  useEffect(function () {
    async function fetchGrupos() {
      const response = await fetch(`http://localhost:3000/grupo/all`);
      const detalles = await response.json();
      setGrupos(detalles);
    }

    fetchGrupos();
  }, []);
  return (
    <>
      <Breadcrumbs title={"Grupos"} link={"Grupos"} />
      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Clases grupales</h2>

            <p>Hay atajos para la felicidad, y el baile es uno de ellos.</p>
            <p>"Vicki Baum"</p>
          </div>{" "}
        </div>


      {grupos.map((grupos, index) => (
        <div className="pb-5" key={index}>
          <CardGrupo grupos={grupos} />
        </div>
      ))}
            </section>
    </>
  );
}
