import React, { createContext, useState } from 'react';

const ProfesoresContext = createContext();

export const ProfesoresProvider = ({children}) => {
  const [profesores, setPeriodos] = useState([
    { value: '1', label: 'Laura Castañeda' },
    { value: '2', label: 'Jhon Sebastian' },
    { value: '3', label: 'lorem ipsum 1' },
    { value: '4', label: 'lorem ipsum 2' },
    { value: '5', label: 'lorem ipsum 3' },
  ])

  const agregar = () => {
    console.log("Accion de agregar");
    const objeto = { value: '5', label: 'lorem ipsum 3' };
    setPeriodos(objeto);
  }
  
  const editar = () => {
    console.log("Accion de editar");
  }
  
  const eliminar = () => {
    console.log("Accion de eliminar");
  }

  return (
    <ProfesoresContext.Provider value={{profesores, agregar, editar, eliminar}}>
        {children}
    </ProfesoresContext.Provider>
  )
}

export default ProfesoresContext;