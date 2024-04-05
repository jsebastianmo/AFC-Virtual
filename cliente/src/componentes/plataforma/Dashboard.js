import React, {  useEffect, useState } from 'react';
import Selector from '../General/Selector';
import usePeriodos from '../../hooks/usePeriodos';
import useCursos from '../../hooks/useCursos';
import CardCurso from './CardCurso';
import Table from '../General/Table';
import useProfesores from '../../hooks/useProfesores';

const Dashboard = () => {

  const [ tipo, setTipo ] = useState("Modulos");
  const { periodos } = usePeriodos();
  const { profesores } = useProfesores();
  const { cursos } = useCursos();
  const [ opcionSeleccionadaPeriodo, setOpcionSeleccionadaPeriodo ] = useState(null);
  const [ opcionSeleccionadaProfesor, setOpcionSeleccionadaProfesor ] = useState(null);
  const [ listaCursos, setListaCursos ] = useState(cursos);
  const [ vista, setVista ] = useState(1);
  
  useEffect(() => {
    if(opcionSeleccionadaPeriodo != null){
      setOpcionSeleccionadaProfesor(null);
      setTipo(opcionSeleccionadaPeriodo.label);
      setListaCursos(cursos.filter((curso) => curso.IdPeriodo === opcionSeleccionadaPeriodo.value));
    }
  }, [opcionSeleccionadaPeriodo])
  
  useEffect(() => {
    if(opcionSeleccionadaProfesor!= null){
      setOpcionSeleccionadaPeriodo(null);
      setTipo(opcionSeleccionadaProfesor.label);
      setListaCursos(cursos.filter((curso) => curso.idProfesor === opcionSeleccionadaProfesor.value));
    }
  }, [opcionSeleccionadaProfesor]);

  const handleDisable = () => {
    setOpcionSeleccionadaPeriodo(null);
    setOpcionSeleccionadaProfesor(null);
    setListaCursos(cursos);
    setTipo("Modulos");
  }

  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Curso',
      accessor: 'curso',
    },
    {
      Header: 'Periodo',
      accessor: 'periodo',
    },
    {
      Header: 'Profesor',
      accessor: 'profesor',
    },
  ];

  const handleVista = (vista) => {
    switch (vista) {
      case 1:
        setVista(1);
        break;
      case 2:
        setVista(2);
        break;
    
      default:
        break;
    }
  }

  return (
    <section className='dashboard'>
      <h1> { tipo } </h1>
      <section className='controles-dashboard'>
        <div className='selectores-dashboard'>
          <Selector opciones={periodos} placeholder="Periodos" selectedOption={opcionSeleccionadaPeriodo} setSeleccion={setOpcionSeleccionadaPeriodo}/>
          <Selector opciones={profesores} placeholder="Profesores" selectedOption={opcionSeleccionadaProfesor} setSeleccion={setOpcionSeleccionadaProfesor}/>
        </div>
        <div className='tipos'>
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="on" defaultChecked onClick={() => handleVista(1)}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio2"><i className="bi bi-grid-fill"></i></label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="on" onClick={() => handleVista(2)}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio1"><i className="bi bi-list-task"></i></label>
          </div>
        </div>
      </section>
      <section>
        <button className='btn btn rounded mt-3 filtro text-white' onClick={handleDisable} disabled={tipo === "Modulos"}> Limpiar Filtro </button>
      </section>
      <section className='modulos'>
        {
          vista === 1
          ?
          (
            <>
              {
                listaCursos.length === 0
                ? (<h1> Sin cursos por mostrar </h1>)
                :
                  listaCursos.map(curso => (
                    <CardCurso curso={curso} key={curso.id}/>
                  ))
              }
            </>
          )
          :
          (
            <Table columns={columns} data={listaCursos}/>
          )
        }
      </section>
    </section>
  )
}

export default Dashboard;