import React, { useEffect } from 'react';
import HeaderLanding from '../../componentes/landingPage/HeaderLanding';
import StickyMenu from '../../componentes/landingPage/StickyMenu';
import HomeLanding from '../../componentes/landingPage/HomeLanding';
import BottomHome from '../../componentes/landingPage/BottomHome';
import CursosLanding from '../../componentes/landingPage/CursosLanding';
import Estadisticas from '../../componentes/landingPage/Estadisticas';
import Eventos from '../../componentes/landingPage/Eventos';
import BuscadorCursos from '../../componentes/landingPage/BuscadorCursos';
import Categorias from '../../componentes/landingPage/Categorias';
import Opiniones from '../../componentes/landingPage/Opiniones';
import Noticias from '../../componentes/landingPage/Noticias';
import FooterLanding from '../../componentes/landingPage/FooterLanding';

const Principal = () => {

  return (
    <>
      {/* Primer seccion */}
      <div className="d-flex flex-column vh-100">
        <HeaderLanding />
        <section className='vh-100 position-relative inicio'>
          <StickyMenu />
          <HomeLanding />
          <BottomHome />
        </section>
      </div>
      {/* Segunda seccion */}
      <CursosLanding />
      {/* Tercer sección */}
      <Estadisticas />
      {/* Cuarta sección */}
      <Eventos />
      {/* Cuarta sección */}
      <BuscadorCursos />
      {/* Quinta sección */}
      <Categorias />
      {/* Sexto sección */}
      <Opiniones />
      {/* Septima sección */}
      <Noticias />
      {/* Footer */}
      <FooterLanding />
    </>
  )
}

export default Principal;