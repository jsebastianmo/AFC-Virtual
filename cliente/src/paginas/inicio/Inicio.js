import React from 'react'
import BarraLateral from '../../componentes/plataforma/BarraLateral';
import Cabecera from '../../componentes/plataforma/Cabecera';
import Dashboard from '../../componentes/plataforma/Dashboard';

const Inicio = () => {
  return (
    <div className='inicio-plataforma'>
        <section className='lateral'>
            <BarraLateral />
        </section>
        <section className='contenido-plataforma'>
            <Cabecera />
            <Dashboard />
        </section>
    </div>
  )
}

export default Inicio;