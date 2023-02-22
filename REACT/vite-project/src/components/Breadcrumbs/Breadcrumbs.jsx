import "../../assets/css/main.css";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ title, link }) {
  return (
    <div className="breadcrumbs d-flex align-items-center breadfoto">
      <div
        className="container position-relative d-flex flex-column align-items-center"
        data-aos="fade"
      >
        <h2>{title}</h2>
        <ol>
          <li>
            <Link className="text-decoration-none" to="/">
              Duende Gitano
            </Link>
          </li>
          <li>{link}</li>
        </ol>
      </div>
    </div>
  );
}
