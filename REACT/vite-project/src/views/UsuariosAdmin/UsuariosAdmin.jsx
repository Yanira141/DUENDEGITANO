import Lista from "../../components/Lista/Lista";
import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";


export default function UsuariosAdmin(){

    const [usuarios, setUsuarios] = useState([]);

    useEffect(function () {
      async function fetchUser() {
        const response = await fetch(`http://localhost:3000/user/all`);
        const detalles = await response.json();
        setUsuarios(detalles);
      }
  
      fetchUser();
    }, []);


    const [usuariosElim, setUsuariosElim] = useState([]);

    useEffect(function () {
      async function fetchUserElim() {
        const response = await fetch(`http://localhost:3000/user/alleliminado`);
        const detalles = await response.json();
        setUsuariosElim(detalles);
      }
  
      fetchUserElim();
    }, []);



    return(
        <>
        <Breadcrumbs title={"panel admin"} link={"paneladmin"}/>
        <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Alumnos</h2>
            <h6>Estos son los alumnos registrados en la web.</h6>
          </div>
       

      <div className="container pb-5">
        <table class="table">
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




      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Alumnos</h2>
            <h6>Estos son los alumnos eliminados en la web.</h6>
          </div>
       

      <div className="container pb-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Email</th>
              <th scope="col">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {usuariosElim.map((usuariosElim, index) => (
              <tr key={index}>
                <Lista usuarios={usuariosElim} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </section>
        </>
    )
}