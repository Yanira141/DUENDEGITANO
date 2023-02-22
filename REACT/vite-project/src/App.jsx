import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "../src/views/Home/Home";
import Contacto from "../src/views/Contacto/Contacto";
import Cursos from "../src/views/Cursos/Cursos";
import CursoDetalle from "./views/CursoDetalle/CursoDetalle";
import Escuela from "./views/Escuela/Escuela";
import IniciaSesion from "./views/IniciaSesion/IniciaSesion";
import Galeria from "./views/Galeria/Galeria";
import PanelAdministrador from "./views/PanelAdministrador/PanelAdministrador";
import PanelUsuario from "./views/PanelUsuario/PanelUsuario";
import { LogInContextProvider } from "./context/AuthContext/logInContext";
import "./assets/css/main.css";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Grupos from "./views/Grupos/Grupos";
import GrupoDetalle from "./views/GrupoDetalle/GrupoDetalle";
import CristinaMarquez from "./views/CristinaMarquez/CristinaMarquez";
import CristinaGallo from "./views/CristinaGallo/CristinaGallo";
import SamuelGallo from "./views/SamuelGallo/SamuelGallo";
import EditActu from "./views/EditActu/EditActu";
import EditCurso from "./views/EditCurso/EditCurso";
import EditGrupo from "./views/EditGrupo/EditGrupo";
import ScrollToTop from "./ScrollToTop";

const ROLES = {
  Admin: 1,
  User: 2,
};

function App() {
  return (
    <LogInContextProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
 
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="grupos" element={<Grupos />} />
            <Route path="cursos" element={<Cursos />} />
            <Route path="grupos/:idgrupo" element={<GrupoDetalle />} />
            <Route path="cursos/:idcurso" element={<CursoDetalle />} />
            <Route path="escuela" element={<Escuela />} />
            <Route path="galeria" element={<Galeria />} />
            <Route path="cristinagallo" element={<CristinaGallo />} />
            <Route path="cristinamarquez" element={<CristinaMarquez />} />
            <Route path="samuelgallo" element={<SamuelGallo />} />
            <Route path="editactu/:id" element={<EditActu />} />
            <Route path="editcurso/:id" element={<EditCurso/>}/>
            <Route path="editgrupo/:id" element={<EditGrupo/>}/>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<IniciaSesion />} />
            </Route>
            <Route
              element={
                <PrivateRoute allowedRoles={[ROLES.Admin, ROLES.User]} />
              }
            ></Route>
            <Route element={<PrivateRoute allowedRoles={[ROLES.Admin]} />}>
              <Route
                path="paneladministrador/:id"
                element={<PanelAdministrador />}
              />
            </Route>
            <Route element={<PrivateRoute allowedRoles={[ROLES.User]} />}>
              <Route path="panelusuario/:id" element={<PanelUsuario />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LogInContextProvider>
  );
}

export default App;
