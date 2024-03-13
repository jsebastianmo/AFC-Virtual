import React from 'react'
import { NavLink } from 'react-router-dom';

const Cabecera = () => {
  return (
    <header className='cabecera'>
      <section className='cabecera-iconos'>
        <i className="bi bi-envelope-fill"></i>
        <i className="bi bi-chat-right-fill"></i>
        <i className="bi bi-check-circle-fill"></i>
        <i className="bi bi-calendar-check-fill"></i>
      </section>
      <section className='cabecera-perfil'>
        <div className='notificaciones'>
          <i className="bi bi-bell-fill"></i>
        </div>
        <div className='detalle-perfil'>
          <p className='nombre'> Jhon Mosquera </p>
          <p className='rol'> Administrador </p>
        </div>
        <div className="dropdown foto-perfil">
          <button className="btn dropdown-toggle imagen-boton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://picsum.photos/200/300" alt="Descripción de la imagen" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">Another action</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
          </ul>
        </div>
      </section>
    </header>
  )
}

export default Cabecera;