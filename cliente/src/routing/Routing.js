import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../paginas/landing/Landing";
import AcercaDe from "../paginas/acercaDe/AcercaDe";
import Pagina404 from "../paginas/404/Pagina404";
import Inicio from "../paginas/inicio/Inicio";

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Inicio />} />
                <Route path="/landing" element = {<Landing />} />
                <Route path="/acerca" element = {<AcercaDe />} />
                <Route path="/*" element = {<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;