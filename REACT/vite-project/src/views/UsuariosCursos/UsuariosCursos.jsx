import Lista from "../../components/Lista/Lista";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UsuariosCursos() {
  const params = useParams();
  const [usuarios, setUsuarios] = useState([]);
const [detCurso, setDetCurso] = useState([])
  useEffect(function () {
    async function fetchUsuarios() {
      const response = await fetch(
        `http://localhost:3000/cursos/usuarioscursos/${params.id}`
      );
      const detalles = await response.json();
      setUsuarios(detalles);
    }
    async function fetchCurso() {
        const responseCurso = await fetch(
          `http://localhost:3000/cursos/${params.id}`
        );
        const curso = await responseCurso.json();
        setDetCurso(curso);
      }
  

    fetchUsuarios();
    fetchCurso()
  }, []);

  return (
    <>
      <Breadcrumbs title={"Panel administrador"} link={"Panel administrador"} />
      {usuarios && detCurso ? (
      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>{detCurso.nombre}</h2>
            <h6>Estas son las personas que estan apuntadas a este curso</h6>
          </div>
       

      <div className="container pb-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Email</th>
              <th scope="col">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuarios, index) => (
              <tr key={index}>
                <Lista usuarios={usuarios} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </section>
       ) : (
        <p>Cargando....</p>
      )}
    </>
  );
}
