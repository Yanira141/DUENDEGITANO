import "./CardProfes.css";
import { Link } from "react-router-dom";

export default function CardProfes() {
  return (
    <>
      <Link to="cristinamarquez">
        <img
          src="imagenes/cristina-verdiales-sola.jpg"
          className="rounded-circle"
          width="400"
          height="400"
          alt="..."
        />
      </Link>
      <Link to="cristinagallo">
        <img
          src="imagenes/cristi-mostaza.jpeg"
          className="rounded-circle"
          width="400"
          height="400"
          alt="..."
        />
      </Link>

      <Link to="samuelgallo">
        <img
          src="fotos/samuel.jpeg"
          className="rounded-circle"
          width="400"
          height="400"
          alt="..."
        />
      </Link>
    </>
  );
}
