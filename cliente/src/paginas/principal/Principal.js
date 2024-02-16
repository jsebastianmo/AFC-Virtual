import React from 'react';
import HeaderLanding from '../../componentes/landingPage/HeaderLanding';
import StickyMenu from '../../componentes/landingPage/StickyMenu';
import HomeLanding from '../../componentes/landingPage/HomeLanding';
import BottomHome from '../../componentes/landingPage/BottomHome';

const Principal = () => {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <HeaderLanding />
        <section className='vh-100 position-relative'>
          <StickyMenu />
          <HomeLanding />
          <BottomHome />
        </section>
      </div>
    </>
  )
}

export default Principal;