import React from 'react'
import { NavLink } from 'react-router-dom';

const FooterLanding = () => {
  return (
    <footer className='footer-landing w-100 bg-dark mt-5'>
        <section className='container'>
            <section className='main py-4'>
                <section className='seccion seccion-1'>
                    <NavLink to='/principal' className="navbar-brand d-flex align-items-center gap-2">
                        <i className="bi bi-journal-plus text-warning fs-1"></i>
                        <h5 className='fs-3 brand-title text-white'> AFC </h5>
                    </NavLink>
                    <p className='text-muted'> We have over 20 years experience providing expert Educational both businesses and individuals. Our Investment Committee brings cades the industry expertise in driving our investment approach. portfolio constructor and allocation </p>
                    <a className='btn btn-outline-secondary'> Ver más </a>
                </section>
                <section className='seccion seccion-2'>
                    <h1 className='text-muted fs-5 pb-3 mb-4'> Cursos populares </h1>
                    <div className='cursos-footer'>
                        <article className='article-footer'>
                            <div className='image-overlay'>
                                <img src='https://picsum.photos/700/400?3' />
                                <div className='overlay'></div>
                            </div>
                            <div>
                                <p className='text-muted'> Curso 1 </p>
                                <span> $99.00 </span>
                            </div>
                        </article>
                        <article className='article-footer'>
                            <div className='image-overlay'>
                                <img src='https://picsum.photos/700/400?4' />
                                <div className='overlay'></div>
                            </div>
                            <div>
                                <p className='text-muted'> Curso 2 </p>
                                <span className='text-success'> Free </span>
                            </div>
                        </article>
                        <article className='article-footer'>
                            <div className='image-overlay'>
                                <img src='https://picsum.photos/700/400?5' />
                                <div className='overlay'></div>
                            </div>
                            <div>
                                <p className='text-muted'> Curso 3 </p>
                                <span> $75.00 </span>
                            </div>
                        </article>
                    </div>
                </section>
                <section className='seccion seccion-3'>
                    <h1 className='text-muted fs-5 pb-3 mb-4'> ENLACES RAPIDOS </h1>
                    <ul>
                        <li> <NavLink> Todos los cursos </NavLink> </li>
                        <li> <NavLink> Sesiones </NavLink> </li>
                        <li> <NavLink> Examenes recientes </NavLink> </li>
                        <li> <NavLink> Cursos profesionales </NavLink> </li>
                        <li> <NavLink> Políticas de privacidad </NavLink> </li>
                        <li> <NavLink> Términos de uso </NavLink> </li>
                        <li> <NavLink> Contáctenos </NavLink> </li>
                    </ul>
                </section>
                <section className='seccion seccion-4'>
                    <h1 className='text-muted fs-5 pb-3 mb-4'> CONTÁCTENOS </h1>
                    <p className='text-muted'> Si quiere contactarnos sobre cualquier tema, nuestro soporte está disponible para ayudarlo </p>
                    <ul>
                        <li> <NavLink> <i className="bi bi-geo-alt-fill bg-warning text-dark"></i> Address: 9015 Sunset Boulevard United Kingdom </NavLink> </li>
                        <li> <NavLink> <i className="bi bi-telephone-fill bg-warning text-dark"></i> Call: <span> + 215 623 7532 </span> </NavLink> </li>
                        <li> <NavLink> <i className="bi bi-envelope-fill bg-warning text-dark"></i> Email: <span> info@Studylms.com </span> </NavLink> </li>
                    </ul>
                </section>
            </section>
            <section className='derechos'>
                <p className='text-muted'> Studylms | © 2018 DesignFalls, All rights reserved </p>
                <div className='redes'>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-youtube"></i>
                </div>
            </section>
        </section>
    </footer>
  )
}

export default FooterLanding;