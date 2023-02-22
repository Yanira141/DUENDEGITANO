import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import "../../assets/css/main.css";
import FormContacto from "../../components/Form/FormContacto/FormContacto";

export default function Contacto() {
  return (
    <>
      <Breadcrumbs title={"Contactar"} link={"Contactar"} />
      <FormContacto />
    </>
  );
}
