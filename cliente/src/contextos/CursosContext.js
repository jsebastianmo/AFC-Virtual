import React, { createContext, useState } from 'react';

const CursosContext = createContext();

export const CursosProvider = ({ children }) => {

  const [cursos, setCursos] = useState([
    { id: '1', nombre: 'Curso 1', IdPeriodo: '1', idProfesor: '1' },
    { id: '2', nombre: 'Curso 2', IdPeriodo: '2', idProfesor: '1' },
    { id: '3', nombre: 'Curso 3', IdPeriodo: '3', idProfesor: '1' },
    { id: '4', nombre: 'Curso 4', IdPeriodo: '4', idProfesor: '1' },
    { id: '5', nombre: 'Curso 5', IdPeriodo: '1', idProfesor: '2' },
    { id: '6', nombre: 'Curso 6', IdPeriodo: '2', idProfesor: '2' },
    { id: '7', nombre: 'Curso 7', IdPeriodo: '3', idProfesor: '1' },
    { id: '8', nombre: 'Curso 8', IdPeriodo: '4', idProfesor: '1' },
    { id: '9', nombre: 'Curso 9', IdPeriodo: '1', idProfesor: '2' },
    { id: '10', nombre: 'Curso 10', IdPeriodo: '2', idProfesor: '3' },
    { id: '11', nombre: 'Curso 11', IdPeriodo: '3', idProfesor: '3' },
    { id: '12', nombre: 'Curso 12', IdPeriodo: '4', idProfesor: '1' },
    { id: '13', nombre: 'Curso 13', IdPeriodo: '1', idProfesor: '1' },
    { id: '14', nombre: 'Curso 14', IdPeriodo: '2', idProfesor: '1' },
    { id: '15', nombre: 'Curso 15', IdPeriodo: '3', idProfesor: '1' },
    { id: '16', nombre: 'Curso 16', IdPeriodo: '4', idProfesor: '1' },
    { id: '17', nombre: 'Curso 17', IdPeriodo: '5', idProfesor: '2' },
    { id: '18', nombre: 'Curso 18', IdPeriodo: '5', idProfesor: '2' },
    { id: '19', nombre: 'Curso 19', IdPeriodo: '19', idProfesor: '2' },
    { id: '20', nombre: 'Curso 20', IdPeriodo: '20', idProfesor: '2' },
    { id: '21', nombre: 'Curso 21', IdPeriodo: '21', idProfesor: '1' },
    { id: '22', nombre: 'Curso 22', IdPeriodo: '22', idProfesor: '1' },
    { id: '23', nombre: 'Curso 23', IdPeriodo: '23', idProfesor: '3' },
    { id: '24', nombre: 'Curso 24', IdPeriodo: '24', idProfesor: '1' },
    { id: '25', nombre: 'Curso 25', IdPeriodo: '25', idProfesor: '1' },
    { id: '26', nombre: 'Curso 26', IdPeriodo: '26', idProfesor: '2' },
    { id: '27', nombre: 'Curso 27', IdPeriodo: '27', idProfesor: '2' },
    { id: '28', nombre: 'Curso 28', IdPeriodo: '28', idProfesor: '1' },
    { id: '29', nombre: 'Curso 29', IdPeriodo: '29', idProfesor: '2' },
    { id: '30', nombre: 'Curso 30', IdPeriodo: '30', idProfesor: '3' },
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