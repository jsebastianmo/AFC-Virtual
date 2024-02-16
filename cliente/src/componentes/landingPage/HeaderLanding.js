import React from 'react';

const HeaderLanding = () => {
  return (
    <header className='header-landing'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container container-fluid header-screens">
                <div className='brand'>
                    <a className="navbar-brand" href="#"><i className="bi bi-telephone"></i></a>
                    <a className="navbar-brand" href="#"><i className="bi bi-envelope"></i></a>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item custom-border">
                            <a className="nav-link text-light" aria-current="page" href="#"> Cell: <span className='text-muted'>(+57) 311 4014773</span> </a>
                        </li>
                        <li className="nav-item custom-border">
                            <a className="nav-link text-light " href="#">Email: <span className='text-muted'>jhonsmosqueraocampo@gmail.com</span></a>
                        </li>
                    </ul>
                </div>
                <span className="login-register row p-1 bg-warning">
                    <a className='col border border-dark border-top-0 border-bottom-0 border-start-0 fs-6 login text-center'> Login </a>
                    <a className='col fs-6 register text-center'> Register </a>
                </span>
            </div>
        </nav>
    </header>
  )
}

export default HeaderLanding;