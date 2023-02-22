import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import Calendario from "../../components/Calendario/Calendario";
import Instalaciones from "../../components/Instalaciones/Instalaciones";

export default function Escuela() {
  return (
    <>
      <Breadcrumbs title={"Escuela"} link={"Escuela"} />
      <Calendario />
      <Instalaciones />
    </>
  );
}
