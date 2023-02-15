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
      <div className="container">
        <div className="d-flex flex-wrap d-grip gap-5">
          {cursos.map((curso, index) => (
            <div key={index}>
              <CardCursos curso={curso} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
