import React from 'react'
import { NavLink } from 'react-router-dom'

const Eventos = () => {
  return (
    <section className='eventos mt-5'>
        <section className='articles container'>
            <article className='heading d-flex'>
                <div className='content-left'>
                    <h1> Eventos proximos </h1>
                    <p className='text-muted'> Eventos proximos listados aqui </p>
                    <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='content-right'>
                    <NavLink className='btn btn-outline-secondary' to='/principal'> Ver más </NavLink>
                </div>
            </article>
            <article className='article'>
                <div className='content-left'>
                    <div className='dia w-25'>
                        <h1 className='dia-mes'> <p className='dia-numero text-warning'> 01 </p> Marzo </h1>
                        <h1 className='dia-semana text-muted'> Miércoles </h1>
                    </div>
                    <div className='detalle w-75'>
                        <h1> Evento 1 </h1>
                        <p className='text-muted'> <span> 8:00 am - 5:00 pm </span> | Dirección 1, detalle</p>
                        <NavLink className='btn btn-outline-secondary' to='/principal'> Registrarse </NavLink>
                    </div>
                </div>
                <div className='content-right'>
                    <img src="https://picsum.photos/700/400?1" alt="imagen" />
                </div>
            </article>
            <article className='article'>
                <div className='content-left'>
                    <div className='dia w-25'>
                        <h1 className='dia-mes'> <p className='dia-numero text-warning'> 07 </p> Abril </h1>
                        <h1 className='dia-semana text-muted'> Sábado </h1>
                    </div>
                    <div className='detalle w-75'>
                        <h1> Evento 2 </h1>
                        <p className='text-muted'> <span> 8:00 am - 5:00 pm </span> | Dirección 1, detalle</p>
                        <NavLink className='btn btn-outline-secondary' to='/principal'> Registrarse </NavLink>
                    </div>
                </div>
                <div className='content-right'>
                    <img src="https://picsum.photos/700/400?2" alt="imagen" />
                </div>
            </article>
            <article className='article last'>
                <div className='content-left'>
                    <div className='dia w-25'>
                        <h1 className='dia-mes'> <p className='dia-numero text-warning'> 25 </p> Enero </h1>
                        <h1 className='dia-semana text-muted'> Domingo </h1>
                    </div>
                    <div className='detalle w-75'>
                        <h1> Evento 3 </h1>
                        <p className='text-muted'> <span> 8:00 am - 5:00 pm </span> | Dirección 1, detalle</p>
                        <NavLink className='btn btn-outline-secondary' to='/principal'> Registrarse </NavLink>
                    </div>
                </div>
                <div className='content-right'>
                    <img src="https://picsum.photos/700/400?3" alt="imagen" />
                </div>
            </article>
        </section>
    </section>
  )
}

export default Eventos