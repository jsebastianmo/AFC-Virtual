import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const BarraLateral = () => {

  useEffect(() => {
    const nav1Links = document.querySelectorAll(".navegacion-lateral a");
    const nav2Links = document.querySelectorAll(".navegacion-textos a");

    nav1Links.forEach((link, index) => {
      link.addEventListener("mouseenter", () => {
        nav2Links[index].classList.add("hoverTextos");
        nav1Links[index].classList.add("hoverIconos");
      });

      link.addEventListener("mouseleave", () => {
        nav2Links[index].classList.remove("hoverTextos");
        nav1Links[index].classList.remove("hoverIconos");
      });
    });

    nav2Links.forEach((link, index) => {
      link.addEventListener("mouseenter", () => {
        nav1Links[index].classList.add("hoverIconos");
        nav2Links[index].classList.add("hoverTextos");
      });

      link.addEventListener("mouseleave", () => {
        nav1Links[index].classList.remove("hoverIconos");
        nav2Links[index].classList.remove("hoverTextos");
      });
    });
  }, []);

  return (
    <section className='barra-lateral'>
      <div className='iconos'>
        <i className="indice bi bi-book-fill"></i>
        <nav className='navegacion-lateral'>
          <ul>
            <li> <NavLink to="/"> <i className="bi bi-border-style"></i> </NavLink> </li>
            <li> <NavLink to="/"> <i className="bi bi-check2-square"></i> </NavLink> </li>
            <li> <NavLink to="/"> <i className="bi bi-calendar"></i> </NavLink> </li>
            <li> <NavLink to="/"> <i className="bi bi-file-earmark-excel"></i> </NavLink> </li>
            <li> <NavLink to="/"> <i className="bi bi-list-task"></i> </NavLink> </li>
            <li> <NavLink to="calificaciones"> <i className="bi bi-card-checklist"></i> </NavLink> </li>
          </ul>
        </nav>
      </div>
      <div className='textos'>
        <div className='titulo-textos'>
          <h1> AFC VIRTUAL </h1>
        </div>
        <nav className='navegacion-textos'>
          <ul>
            <li> <NavLink to="/"> Cursos </NavLink> </li>
            <li> <NavLink to="/"> Asistencia </NavLink> </li>
            <li> <NavLink to="/"> Horario </NavLink> </li>
            <li> <NavLink to="/"> Tareas </NavLink> </li>
            <li> <NavLink to="/"> Evaluaciones </NavLink> </li>
            <li> <NavLink to="calificaciones"> Calificaciones </NavLink> </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default BarraLateral;