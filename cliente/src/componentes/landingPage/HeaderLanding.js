import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLanding = () => {
  return (
    <header className='header-landing'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container container-fluid header-screens">
                <div className='brand'>
                    <NavLink to='/principal' className="navbar-brand"><i className="bi bi-telephone"></i></NavLink>
                    <NavLink to='/principal' className="navbar-brand"><i className="bi bi-envelope"></i></NavLink>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item custom-border">
                            <NavLink to='/principal' className="nav-link text-light" aria-current="page"> Cell: <span className='text-muted'>(+57) 311 4014773</span> </NavLink>
                        </li>
                        <li className="nav-item custom-border">
                            <NavLink to='/principal' className="nav-link text-light ">Email: <span className='text-muted'>jhonsmosqueraocampo@gmail.com</span></NavLink>
                        </li>
                    </ul>
                </div>
                <span className="login-register row p-1 bg-warning">
                    <NavLink to='/principal' className='col border border-dark border-top-0 border-bottom-0 border-start-0 fs-6 login text-center'> Login </NavLink>
                    <NavLink to='/principal' className='col fs-6 register text-center'> Register </NavLink>
                </span>
            </div>
        </nav>
    </header>
  )
}

export default HeaderLanding;