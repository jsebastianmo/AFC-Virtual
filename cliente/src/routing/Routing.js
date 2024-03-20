import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../paginas/landing/Landing";
import AcercaDe from "../paginas/acercaDe/AcercaDe";
import Pagina404 from "../paginas/404/Pagina404";
import Inicio from "../paginas/inicio/Inicio";
import { PeriodosProvider } from "../contextos/PeriodosContext";
import { ProfesoresProvider } from "../contextos/ProfesoresContext";
import { CursosProvider } from "../contextos/CursosContext";

const Routing = () => {
    return(
        <PeriodosProvider>
            <ProfesoresProvider>
                <CursosProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element = {<Inicio />} />
                            <Route path="/landing" element = {<Landing />} />
                            <Route path="/acerca" element = {<AcercaDe />} />
                            <Route path="/*" element = {<Pagina404 />} />
                        </Routes>
                    </BrowserRouter>
                </CursosProvider>
            </ProfesoresProvider>
        </PeriodosProvider>
    )
}

export default Routing;