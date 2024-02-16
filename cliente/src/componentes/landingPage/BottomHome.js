import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomHome = () => {
  return (
    <section className='container bottom-home position-relative'>
        <section>
            <div className='pie-home d-flex'>
                <div className='text-white p-4 position-relative contenido contenido-1 d-flex justify-content-around'>
                    <i class="bi bi-trophy-fill fs-1 w-25"></i>
                    <div className='d-flex flex-column w-75'>
                        <h1 className='fs-2 text-white'> Titulo </h1>
                        <NavLink to='/principal'> Ver más </NavLink>
                    </div>
                </div>
                <div className='text-white p-4 position-relative contenido contenido-2 d-flex justify-content-around'>
                    <i class="bi bi-trophy-fill fs-1 w-25"></i>
                    <div className='d-flex flex-column w-75'>
                        <h1 className='fs-2 text-white'> Titulo </h1>
                        <NavLink to='/principal'> Ver más </NavLink>
                    </div>
                </div>
                <div className='text-white p-4 position-relative contenido contenido-3 d-flex justify-content-around'>
                    <i class="bi bi-trophy-fill fs-1 w-25"></i>
                    <div className='d-flex flex-column w-75'>
                        <h1 className='fs-2 text-white'> Titulo </h1>
                        <NavLink to='/principal'> Ver más </NavLink>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default BottomHome;