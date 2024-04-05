import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../paginas/landing/Landing";
import AcercaDe from "../paginas/acercaDe/AcercaDe";
import Pagina404 from "../paginas/404/Pagina404";
import Inicio from "../paginas/inicio/Inicio";
import BarraLateral from "../componentes/plataforma/BarraLateral";
import Cabecera from "../componentes/plataforma/Cabecera";
import { PeriodosProvider } from "../contextos/PeriodosContext";
import { ProfesoresProvider } from "../contextos/ProfesoresContext";
import { CursosProvider } from "../contextos/CursosContext";
import Clase from "../paginas/clase/Clase";
import ContenidoClase from "../componentes/plataforma/clase/ContenidoClase";
import ActividadesClase from "../componentes/plataforma/clase/ActividadesClase";
import EvaluacionesClase from "../componentes/plataforma/clase/EvaluacionesClase";
import RecursosClase from "../componentes/plataforma/clase/RecursosClase";
import { AuthProvider } from "../contextos/AuthProvider";
import PublicLayout from "../public/PublicLayout";
import PrivateLayout from "../private/PrivateLayout";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
          <AuthProvider>
              <Routes>
                  <Route path="/" element={ <PublicLayout/> }>
                      <Route index element= { <Landing /> } />
                      <Route path="landing" element= { <Landing /> } />
                  </Route>
                  <Route path="/inicio" element= { <PrivateLayout/> } >
                    <Route index element={<Inicio /> }/>
                    <Route path="acerca" element={<AcercaDe />} />
                    <Route path="clase/:nombre" element={<Clase />}>
                      <Route index element={<ContenidoClase />}/>
                      <Route path="actividades" element={<ActividadesClase />}/>
                      <Route path="evaluaciones" element={<EvaluacionesClase />}/>
                      <Route path="recursos" element={<RecursosClase />}/>
                    </Route>
                  </Route>
                  <Route path="*" element = { <Pagina404 /> } />
              </Routes>
          </AuthProvider>
      </BrowserRouter>
    </>
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/landing" element={<Landing />} />
    // </Routes>
    //         <div className="inicio-plataforma">
    //           <input type="checkbox" id="check" className="open-close" hidden/>
    //           <label htmlFor="check" className="open-close-arrow">
    //             <i className="bi bi-caret-right-fill"></i>
    //           </label>
    //           <section className="lateral">
    //             <BarraLateral />
    //           </section>
    //           <section className="contenido-plataforma">
    //             <Cabecera />
    //     <Routes>

    //               <Route path="/inicio" element={<PeriodosProvider><ProfesoresProvider><CursosProvider><Inicio /></CursosProvider></ProfesoresProvider></PeriodosProvider>} />
    //               <Route path="/acerca" element={<AcercaDe />} />
    //               <Route path="/clase/:nombre" element={<Clase />}>
    //                 <Route index element={<ContenidoClase />}/>
    //                 <Route path="actividades" element={<ActividadesClase />}/>
    //                 <Route path="evaluaciones" element={<EvaluacionesClase />}/>
    //                 <Route path="recursos" element={<RecursosClase />}/>
    //               </Route>
    //               <Route path="/*" element={<Pagina404 />} />
    //             </Routes>
    //           </section>
    //         </div>
    // </BrowserRouter>
  );
};

export default Routing;
