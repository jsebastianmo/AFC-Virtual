import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "../paginas/principal/Principal";
import AcercaDe from "../paginas/acercaDe/AcercaDe";

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<AcercaDe />} />
                <Route path="/principal" element = {<Principal />} />
                <Route path="/acerca" element = {<AcercaDe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;