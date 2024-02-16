import React from 'react'
import { NavLink } from 'react-router-dom';

const StickyMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent sticky-top position-absolute">
        <div className="container container-fluid header-screens">
            <NavLink to='/principal' className="navbar-brand d-flex align-items-center justify-content-between gap-3" href="#">
                <i className="bi bi-journal-plus text-warning fs-1 mr-4"></i>
                <h5 className='fs-3 text-white'> AFC </h5>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-4" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to='/principal' className="nav-link text-white" aria-current="page" href="#">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/principal' className="nav-link text-white" href="#">Cursos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/principal' className="nav-link text-white" href="#">Eventos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/principal' className="nav-link text-white" href="#">Paginas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/principal' className="nav-link text-white" href="#">Tienda</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/principal' className="nav-link text-white" href="#">Contacto</NavLink>
                    </li>
                </ul>
            </div>
            <div className="btn-group">
                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-search text-white"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end form">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default StickyMenu;