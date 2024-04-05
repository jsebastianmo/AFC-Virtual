import React from 'react'
import { NavLink } from 'react-router-dom';
import ModalSobreNosotros from '../General/ModalSobreNosotros';

const StickyMenu = () => {

    window.addEventListener('scroll', function() {
        var stickyElement = document.getElementById('myStickyElement');
        var scrollPosition = window.scrollY || window.pageYOffset;
        
        if (scrollPosition > 0) {
          stickyElement.classList.add('sticky-scrolled');
        } else {
          stickyElement.classList.remove('sticky-scrolled');
        }
      });

  return (
    <>
        <div className='sticky-top w-100' id='sticky'>
            <nav className="navbar navbar-expand-lg navbar-light position-absolute w-100" id='myStickyElement'>
                <div className="container container-fluid header-screens w-100">
                    <NavLink to='/landing' className="navbar-brand d-flex align-items-center justify-content-between gap-3">
                        <i className="bi bi-journal-plus text-warning fs-1 mr-4"></i>
                        <h5 className='fs-3 brand-title'> AFC </h5>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-4" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/landing' className="nav-link" aria-current="page">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Sobre nosotros</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/landing' className="nav-link">Programa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/landing' className="nav-link">Admisiones</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/landing' className="nav-link">Becas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/landing' className="nav-link">Contacto</NavLink>
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
        </div>
        <ModalSobreNosotros />
    </>
  )
}

export default StickyMenu;