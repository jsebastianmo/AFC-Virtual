import { NavLink } from 'react-router-dom/dist';

const MenuClase = () => {
  return (
    <section className='menu-clase'>
        <i className="bi bi-person-video3 icon-class"></i>
        <nav>
            <ul>
                <li> <NavLink to="/clase/telogia" className={({isActive})=>isActive ? 'activeLink' : ''}> <i className="bi bi-camera-reels icon-class"></i> </NavLink> </li>
                <li> <NavLink to="/clase/teologia/actividades" className={({isActive})=>isActive ? 'activeLink' : ''}> <i className="bi bi-card-checklist icon-class"></i> </NavLink> </li>
                <li> <NavLink to="/clase/teologia/evaluaciones" className={({isActive})=>isActive ? 'activeLink' : ''}> <i className="bi bi-question-circle icon-class"></i> </NavLink> </li>
                <li> <NavLink to="/clase/teologia/recursos" className={({isActive})=>isActive ? 'activeLink' : ''}> <i className="bi bi-journals icon-class"></i> </NavLink> </li>
            </ul>
        </nav>
        <div className="dropdown foto-perfil">
          <button className="btn dropdown-toggle imagen-boton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://picsum.photos/200/300" alt="Descripción de la imagen" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">Another action</NavLink></li>
          </ul>
        </div>
    </section>
  )
}

export default MenuClase