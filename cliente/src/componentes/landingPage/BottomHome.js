import React from 'react';

const BottomHome = () => {
  return (
    <div className='container'>
        <div className='container header-screens pie-home row'>
            <div className='col bg-warning text-white p-4 position-relative contenido contenido-1 d-flex justify-content-around'>
                <i class="bi bi-trophy-fill fs-1 w-25"></i>
                <div className='d-flex flex-column w-75'>
                    <h1 className='fs-2 text-white'> Titulo </h1>
                    <a href='#'> Ver más </a>
                </div>
            </div>
            <div className='col bg-warning text-white p-4 position-relative contenido contenido-2 d-flex justify-content-around'>
                <i class="bi bi-trophy-fill fs-1 w-25"></i>
                <div className='d-flex flex-column w-75'>
                    <h1 className='fs-2 text-white'> Titulo </h1>
                    <a href='#'> Ver más </a>
                </div>
            </div>
            <div className='col bg-warning text-white p-4 position-relative contenido contenido-3 d-flex justify-content-around'>
                <i class="bi bi-trophy-fill fs-1 w-25"></i>
                <div className='d-flex flex-column w-75'>
                    <h1 className='fs-2 text-white'> Titulo </h1>
                    <a href='#'> Ver más </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomHome;