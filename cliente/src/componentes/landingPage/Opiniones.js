import React from 'react'

const Opiniones = () => {
  return (
    <section className='eventos mt-5'>
        <h1 className='text-center'> Lo que las personas dicen </h1>
        <section className='articles container'>
            <article className='article'>
                <div className='content-left'>
                    <div className='dia w-25'>
                        <img src="https://picsum.photos/700/400?1" alt="imagen" />
                    </div>
                    <div className='detalle w-75'>
                        <h1 className='fs-4'> Jhon Sebastian Mosquera Ocampo </h1>
                        <p className='text-muted'> aqui iria la opinión de cada persona </p>
                    </div>
                </div>
            </article>
        </section>
    </section>
  )
}

export default Opiniones;