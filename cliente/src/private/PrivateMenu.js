import React from 'react'
import BarraLateral from '../componentes/plataforma/BarraLateral';
import Cabecera from '../componentes/plataforma/Cabecera';

const PrivateMenu = ({children}) => {
  return (
    <div className="inicio-plataforma">
    <input type="checkbox" id="check" className="open-close" hidden/>
    <label htmlFor="check" className="open-close-arrow">
      <i className="bi bi-caret-right-fill"></i>
    </label>
    <section className="lateral">
      <BarraLateral />
    </section>
    <section className="contenido-plataforma">
      <Cabecera />
      { children }
    </section>
    </div>
  )
}

export default PrivateMenu;