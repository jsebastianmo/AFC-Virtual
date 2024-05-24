import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const MetadatosClase = () => {
    const [ contenido, setContenido ] = useState('curso');
   return (
        <section className='metadatos-clase container'>
            <section className='metadatos-clase-titulo container'>
                <i className="bi bi-amd"></i>
                <h1> Clase de informática </h1>
                <NavLink className='btn btn-primary' to="/inicio/clase/teologia"> Entrar a la clase </NavLink>
            </section>
            <img className='metadatos-clase-imagen' src='/activos/metadatos-profesor.png' alt='imagen'/>
            <section className='metadatos-clase-contenido'>
                <section className='metadatos-clase-contenido-informacion'>
                    {
                        contenido === 'curso' ?
                        (
                            <div className='metadatos-clase-contenido-informacion-acerca_curso'>
                                acerca del curso
                            </div>
                        )
                        :
                        contenido === 'profesor' ?
                        (
                            <div className='metadatos-clase-contenido-informacion-acerca_profesor'>
                                acerca del profesor
                            </div>
                        )
                        :
                        contenido === 'plan' ?
                        (
                            <div className='metadatos-clase-contenido-informacion-contenido'>
                                Plan de estudios
                            </div>
                        )
                        :
                        contenido === 'porcentaje' ?
                        (
                            <div className='metadatos-clase-contenido-informacion-porcentajes'>
                                Porcentajes
                            </div>
                        )
                        :
                        contenido === 'experiencia' ?
                        (
                            <div className='metadatos-clase-contenido-informacion-experiencia'>
                                Experiencias
                            </div>
                        )
                        :
                        (
                            <div className='metadatos-clase-contenido-informacion-acerca_curso'>
                                acerca del curso
                            </div>
                        )
                    }
                </section>
            </section>
            <section className='metadatos-clase-pie'>
                <ul>
                    <li onClick={() => setContenido('clase')} className={contenido==='clase'? 'actived' : ''}> Acerca del curso </li>
                    <li onClick={() => setContenido('profesor')} className={contenido==='profesor'? 'actived' : ''}> Acercar del profesor </li>
                    <li onClick={() => setContenido('plan')} className={contenido==='plan'? 'actived' : ''}> Plan de estudios </li>
                    <li onClick={() => setContenido('porcentaje')} className={contenido==='porcentaje'? 'actived' : ''}> Porcentajes </li>
                    <li onClick={() => setContenido('experiencia')} className={contenido==='experiencia'? 'actived' : ''}> Experiencia </li>
                </ul>
            </section>
        </section>
  )
}

export default MetadatosClase;