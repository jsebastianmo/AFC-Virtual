import React, { useState } from 'react';

const Evaluacion = () => {
  const totalSteps = 10;
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    if (progress < totalSteps) {
      setProgress(progress + 1);
    }
  };

  const handlePrev = () => {
    if (progress > 0) {
      setProgress(progress - 1);
    }
  };

  return (
    <section className='evaluacion-materia container mt-5'>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Teología</li>
          <li className="breadcrumb-item active" aria-current="page">Evaluacion 1</li>
        </ol>
      </nav>
      <div className='step-progreso'>
        <div className="progress-container">
        {[...Array(totalSteps)].map((_, index) => (
          <div key={index} className={`progress-dot ${progress >= index ? 'active' : ''}`} style={{ left: `${(index / (totalSteps - 1)) * 100}%` }}>
            {index + 1} {/* Muestra el número de paso */}
          </div>
        ))}
          <div className="progress-bar" style={{ width: `${(progress / (totalSteps-1)) * 100}%` }}></div>
        </div>
      </div>
      <div className='evaluacion-indicadores'>
        <h4 className='evaluacion-titulo my-3'> Teología: Evaluacion 1 </h4>
        <span className='evaluacion-tiempo'> 05:25 </span>
        <button className='evaluacion-enviar btn'> Revisar y enviar </button>
      </div>
      <section className='evaluacion-preguntas'>
        <div className='evaluacion-preguntas-cabecera'>
          <section className='evaluacion-preguntas-cabecera-informacion'>
            <span> Pregunta 1 de 10 </span>
            <p> Contenido de la pregunta </p>
          </section>
          <section className='evaluacion-preguntas-cabecera-botones'>
            <button className='btn evaluacion-preguntas-cabecera-boton' onClick={handlePrev} disabled={false || progress === 0}> Anterior pregunta </button>
            <button className='btn evaluacion-preguntas-cabecera-boton' onClick={handleNext} disabled={progress === 100}> Siguiente pregunta </button>
          </section>
        </div>
        <div className='evaluacion-preguntas-contenido mt-3'>
          <span className='evaluacion-preguntas-contenido-notas'> Elije una sola opción </span>
          <section className='evaluacion-preguntas-contenido-opciones'>
            <ul className='evaluacion-preguntas-contenido-opciones-lista'>
              <li className='evaluacion-preguntas-contenido-opciones-opcion'>
                <span> 1 </span>
                <p className='contenido-pregunta'> Opcion de respuesta 1 </p>
              </li>
              <li className='evaluacion-preguntas-contenido-opciones-opcion'>
                <span> 2 </span>
                <p className='contenido-pregunta'> Opcion de respuesta 2 </p>
              </li>
              <li className='evaluacion-preguntas-contenido-opciones-opcion'>
                <span> 3 </span>
                <p className='contenido-pregunta'> Opcion de respuesta 3 </p>
              </li>
              <li className='evaluacion-preguntas-contenido-opciones-opcion'>
                <span> 4 </span>
                <p className='contenido-pregunta'> Opcion de respuesta 4 </p>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </section>
  )
}

export default Evaluacion;