import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "../paginas/principal/Principal";
import AcercaDe from "../paginas/acercaDe/AcercaDe";
import Pagina404 from "../paginas/404/Pagina404";

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<AcercaDe />} />
                <Route path="/principal" element = {<Principal />} />
                <Route path="/acerca" element = {<AcercaDe />} />
                <Route path="/*" element = {<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;