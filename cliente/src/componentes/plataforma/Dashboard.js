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
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Country',
      accessor: 'country',
    },
  ];
  
  const data = [
    { id: 1, name: 'John', age: 30, country: 'USA' },
    { id: 2, name: 'Doe', age: 25, country: 'Canada' },
    { id: 3, name: 'Jane', age: 40, country: 'UK' },
    { id: 4, name: 'Alice', age: 35, country: 'Colombia' },
    { id: 5, name: 'Jhon', age: 15, country: 'Colombia' },
    { id: 6, name: 'Sebastian', age: 25, country: 'Colombia' },
    { id: 7, name: 'Mosquera', age: 24, country: 'Colombia' },
    { id: 8, name: 'Ocampo', age: 56, country: 'Colombia' },
    { id: 9, name: 'Laura', age: 87, country: 'Colombia' },
    { id: 10, name: 'Valentina', age: 24, country: 'Colombia' },
    { id: 11, name: 'Castañeda', age: 45, country: 'Colombia' },
    { id: 12, name: 'Muñoz', age: 65, country: 'Colombia' },
    { id: 13, name: 'Alan', age: 76, country: 'Colombia' },
    { id: 14, name: 'Simon', age: 35, country: 'Colombia' },
    { id: 15, name: 'Hector', age: 65, country: 'Colombia' },
    { id: 16, name: 'Guillermo', age: 74, country: 'Colombia' },
    { id: 17, name: 'Luz', age: 83, country: 'Colombia' },
    { id: 18, name: 'Mery', age: 36, country: 'Colombia' },
    { id: 19, name: 'Juan', age: 37, country: 'Colombia' },
    { id: 20, name: 'Camilo', age: 46, country: 'Colombia' },
    { id: 21, name: 'Daniel', age: 75, country: 'Colombia' },
    { id: 22, name: 'Jeronimo', age: 23, country: 'Colombia' },
    { id: 23, name: 'Lorem', age: 55, country: 'Colombia' },
    { id: 24, name: 'Ipsum', age: 38, country: 'Colombia' },
    { id: 25, name: 'Laura', age: 28, country: 'Colombia' },
    { id: 26, name: 'Valentina', age: 30, country: 'Colombia' },
    { id: 27, name: 'Jhon', age: 28, country: 'Colombia' },
    { id: 28, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 29, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 30, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 31, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 32, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 33, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 34, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 35, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 36, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 37, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 38, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 39, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 40, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 41, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 42, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 43, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 44, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 45, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 46, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 47, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 48, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 49, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 50, name: 'Sebastian', age: 17, country: 'Colombia' },
    { id: 51, name: 'Sebastian', age: 17, country: 'Colombia' },
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
            <Table columns={columns} data={data}/>
          )
        }
      </section>
    </section>
  )
}

export default Dashboard;