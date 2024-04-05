import { Outlet } from "react-router-dom/dist";
import ChatClase from "../../componentes/plataforma/clase/ChatClase";
import InformacionClase from "../../componentes/plataforma/clase/InformacionClase";
import MenuClase from "../../componentes/plataforma/clase/MenuClase";

const Clase = () => {

  return (
    <section className="clase">
        {/* menu de navegacion */}
        <MenuClase />
        {/* Informacion cabecera */}
        <InformacionClase />
        {/* Contenido */}
        <Outlet />
        {/* Chat */}
        <ChatClase />
    </section>
  )
}

export default Clase;