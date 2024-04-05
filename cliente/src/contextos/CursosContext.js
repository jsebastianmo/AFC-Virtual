import React, { createContext, useState } from 'react';

const CursosContext = createContext();

export const CursosProvider = ({ children }) => {

  const [cursos, setCursos] = useState([
    { id: '1', curso: 'Curso 1', periodo: 'periodo 1',IdPeriodo: '1', idProfesor: '1', profesor: 'Laura Valentina'},
    { id: '2', curso: 'Curso 2', periodo: 'periodo 2',IdPeriodo: '2', idProfesor: '1', profesor: 'Jhon Sebastian'},
    { id: '3', curso: 'Curso 3', periodo: 'periodo 3',IdPeriodo: '3', idProfesor: '1', profesor: 'Laura Valentina'},
    { id: '4', curso: 'Curso 4', periodo: 'periodo 4',IdPeriodo: '4', idProfesor: '1', profesor: 'Laura Valentina'},
    { id: '5', curso: 'Curso 5', periodo: 'periodo 1',IdPeriodo: '1', idProfesor: '2', profesor: 'Jhon Sebastian'},
    { id: '6', curso: 'Curso 6', periodo: 'periodo 2',IdPeriodo: '2', idProfesor: '2', profesor: 'Jhon Sebastian'},
    { id: '7', curso: 'Curso 7', periodo: 'periodo 3',IdPeriodo: '3', idProfesor: '1', profesor: 'Laura Valentina'},
    { id: '8', curso: 'Curso 8', periodo: 'periodo 4',IdPeriodo: '4', idProfesor: '1', profesor: 'Laura Valentina'},
    { id: '9', curso: 'Curso 9', periodo: 'periodo 1',IdPeriodo: '1', idProfesor: '2', profesor: 'Jhon Sebastian'},
    { id: '10', curso: 'Curso 10', periodo: 'periodo 2',IdPeriodo: '2', idProfesor: '3', profesor: 'lorem'},
    { id: '11', curso: 'Curso 11', periodo: 'periodo 3',IdPeriodo: '3', idProfesor: '3', profesor: 'lorem'},
    { id: '12', curso: 'Curso 12', periodo: 'periodo 4',IdPeriodo: '4', idProfesor: '1', profesor: 'Laura Valentina'},
    { id: '13', curso: 'Curso 13', periodo: 'periodo 1',IdPeriodo: '1', idProfesor: '1', profesor: 'Laura Valentina'},
    { id: '14', curso: 'Curso 14', periodo: 'periodo 2',IdPeriodo: '2', idProfesor: '1', profesor: 'Laura Valentina'},
    { id: '15', curso: 'Curso 15', periodo: 'periodo 3',IdPeriodo: '3', idProfesor: '1', profesor: 'Laura Valentina'},
    { id: '16', curso: 'Curso 16', periodo: 'periodo 4',IdPeriodo: '4', idProfesor: '1', profesor: 'Laura Valentina'},
    { id: '17', curso: 'Curso 17', periodo: 'periodo 5',IdPeriodo: '5', idProfesor: '2', profesor: 'Jhon Sebastian'},
    { id: '18', curso: 'Curso 18', periodo: 'periodo 5',IdPeriodo: '5', idProfesor: '2', profesor: 'Jhon Sebastian'},
    { id: '19', curso: 'Curso 19', periodo: 'periodo 1',IdPeriodo: '1', idProfesor: '2', profesor: 'Jhon Sebastian' },
    { id: '20', curso: 'Curso 20', periodo: 'periodo 2',IdPeriodo: '2', idProfesor: '2', profesor: 'Jhon Sebastian' },
    { id: '21', curso: 'Curso 21', periodo: 'periodo 3',IdPeriodo: '3', idProfesor: '1', profesor: 'Laura Valentina' },
    { id: '22', curso: 'Curso 22', periodo: 'periodo 4',IdPeriodo: '4', idProfesor: '1', profesor: 'Laura Valentina' },
    { id: '23', curso: 'Curso 23', periodo: 'periodo 5',IdPeriodo: '5', idProfesor: '3', profesor: 'lorem' },
    { id: '24', curso: 'Curso 24', periodo: 'periodo 5',IdPeriodo: '5', idProfesor: '1', profesor: 'Laura Valentina' },
    { id: '25', curso: 'Curso 25', periodo: 'periodo 4',IdPeriodo: '4', idProfesor: '1', profesor: 'Laura Valentina' },
    { id: '26', curso: 'Curso 26', periodo: 'periodo 3',IdPeriodo: '3', idProfesor: '2', profesor: 'Jhon Sebastian' },
    { id: '27', curso: 'Curso 27', periodo: 'periodo 2',IdPeriodo: '2', idProfesor: '2', profesor: 'Jhon Sebastian' },
    { id: '28', curso: 'Curso 28', periodo: 'periodo 1',IdPeriodo: '1', idProfesor: '1', profesor: 'Laura Valentina' },
    { id: '29', curso: 'Curso 29', periodo: 'periodo 1',IdPeriodo: '1', idProfesor: '2', profesor: 'Jhon Sebastian' },
    { id: '30', curso: 'Curso 30', periodo: 'periodo 2',IdPeriodo: '2', idProfesor: '3', profesor: 'lorem' },
  ])

  const agregar = () => {
    console.log("Accion de agregar");
    const objeto = { id: '31', nombre: 'Curso 31', IdPeriodo: '31', idProfesor: '31' };
    setCursos(objeto);
  }
  
  const editar = () => {
    console.log("Accion de editar");
  }
  
  const eliminar = () => {
    console.log("Accion de eliminar");
  }

  return (
    <CursosContext.Provider value={{ cursos, agregar, editar, eliminar }}>
        { children }
    </CursosContext.Provider>
  )
}

export default CursosContext;