import "./Calendario.css"


export default function Calendario(){
    return(
        <>
     
        <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Horario semanal</h2>
            <div className="text-center ">
        <ol>
            <li></li>
            <li className="horario pt-5"><b>Lunes</b></li>
            <li className="horario pt-5"><b>Miércoles</b></li>
            <li className="horario pt-5"><b>Jueves</b></li>


            <li className="horario pt-5"><b>17:00 - 18:00</b></li>
            <li className="pt-5">Iniciación a la danza (3 - 6 años)</li>
            <li className="pt-5">Iniciación a la danza (3 - 6 años)</li>
            <li className="pt-5">   </li>


            <li className="horario pt-5"><b>18:00 - 19:00</b></li>
            <li className="pt-5">Danza (6 - 9 años)
                Danza (9 - 14 años)
            </li>
            <li className="pt-5">Danza (9 - 14 años)</li>
            <li className="pt-5">Danza (6 - 9 años)</li>


            <li className="horario pt-5"><b>19:00 - 20:00</b></li>
            <li className="pt-5">Flamenco Medio</li>
            <li className="pt-5">Flamenco Avanzado</li>
            <li className="pt-5">Hip-Hop Peques</li>


            <li className="horario pt-5"><b>20:00 - 21:00</b></li>
            <li className="pt-5">Flamenco Avanzado</li>
            <li className="pt-5">Salsa y Bachata</li>
            <li className="pt-5">Flamenco Medio</li>



            <li className="horario pt-5"><b>21:00 - 21:30</b></li>
            <li className="pt-5">  </li>
            <li className="pt-5">  </li>
            <li className="pt-5">Hip-Hop Avanzado</li>



        </ol>
        </div>
        </div></div></section>
       
        </>
    )
}