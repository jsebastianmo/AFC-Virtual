import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../paginas/landing/Landing";
import AcercaDe from "../paginas/acercaDe/AcercaDe";
import Pagina404 from "../paginas/404/Pagina404";
import Inicio from "../paginas/inicio/Inicio";
import { PeriodosProvider } from "../contextos/PeriodosContext";
import { ProfesoresProvider } from "../contextos/ProfesoresContext";
import { CursosProvider } from "../contextos/CursosContext";
import Clase from "../paginas/clase/Clase";
import ContenidoClase from "../componentes/plataforma/clase/ContenidoClase";
import ActividadesClase from "../componentes/plataforma/clase/ActividadesClase";
import EvaluacionesClase from "../componentes/plataforma/clase/EvaluacionesClase";
import RecursosClase from "../componentes/plataforma/clase/RecursosClase";
import { AuthProvider } from "../contextos/AuthContext";
import PublicLayout from "../public/PublicLayout";
import PrivateLayout from "../private/PrivateLayout";
import Evaluacion from "../componentes/General/Evaluacion/Evaluacion";
import MetadatosClase from "../componentes/plataforma/clase/MetadatosClase";
import Calificaciones from "../componentes/plataforma/Calificaciones";
import EstudiantesMateria from "../componentes/plataforma/EstudiantesMateria";
import Perfil from "../componentes/plataforma/Perfil";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
          <AuthProvider>
            <PeriodosProvider>
              <ProfesoresProvider>
                <CursosProvider>
                  <Routes>
                      <Route path="/" element={ <PublicLayout/> }>
                          <Route index element= { <Landing /> } />
                          <Route path="landing" element= { <Landing /> } />
                      </Route>
                      <Route path="inicio" element= { <PrivateLayout/> } >
                        <Route index element={<Inicio /> }/>
                        <Route path="acerca" element={<AcercaDe />} />
                        <Route path="informacion/:nombreClase" element={<MetadatosClase />} />
                        <Route path="clase/:nombreClase" element={<Clase />}>
                            <Route index element={<ContenidoClase />}/>
                            <Route path="actividades" element={<ActividadesClase />}/>
                            <Route path="evaluaciones" element={<EvaluacionesClase />}/>
                            <Route path="recursos" element={<RecursosClase />}/>
                        </Route>
                        <Route path="calificaciones" element={<Calificaciones />}/>
                        <Route path="perfil/:id" element={<Perfil />}/>
                        <Route path="estudiantes/:materia" element={<EstudiantesMateria />}/>
                        <Route path="evaluacion/:materia/:nombre" element={<Evaluacion />} />
                      </Route>
                      <Route path="*" element = { <Pagina404 /> } />
                  </Routes>
                </CursosProvider>
              </ProfesoresProvider>
            </PeriodosProvider>
          </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default Routing;
