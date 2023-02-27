import "./GaleriaFotos.css";

export default function GaleriaFotos({ imagenes }) {
  return (
    <>
      <div className=" text-center pb-5">
        <div className="cardcursos cardgaleria">
          <img src={`http://localhost:3000/${imagenes.ruta}`} className="card-img-top"  alt="..." />
            <p>{imagenes.titulo}</p>
        </div>
      </div>
    </>
  );
}





// import "./GaleriaFotos.css";

// export default function GaleriaFotos({ imagenes }) {
//   return (
//     <>
//       <div className=" text-center pb-5">
//         <div className="cardcursos">
//           <img className="card-img-top" style={{background: "url(`http://localhost:3000/${imagenes.ruta}`)"}} alt="..." />
//         </div>
//       </div>
//     </>
//   );
// }


