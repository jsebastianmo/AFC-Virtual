import React, { createContext, useState } from 'react';

const ProfesoresContext = createContext();

export const ProfesoresProvider = ({children}) => {

  const [profesores, setProfesores] = useState([
    { id: '1', nombre: 'Laura Valentina', apellido: 'Castañeda Muñoz', perfil: 'Lorem ipsum'},
    { id: '2', nombre: 'Jhon Sebastian', apellido: 'Mosquera Ocampo', perfil: 'Lorem ipsum'},
    { id: '3', nombre: 'lorem1', apellido: 'ipsum1', perfil: 'Lorem ipsum', perfil: 'Lorem ipsum'},
    { id: '4', nombre: 'lorem2', apellido: 'ipsum2', perfil: 'Lorem ipsum', perfil: 'Lorem ipsum'},
    { id: '5', nombre: 'lorem3', apellido: 'ipsum3', perfil: 'Lorem ipsum', perfil: 'Lorem ipsum'},
    { id: '6', nombre: 'lorem4', apellido: 'ipsum4', perfil: 'Lorem ipsum', perfil: 'Lorem ipsum'},
    { id: '7', nombre: 'lorem5', apellido: 'ipsum5', perfil: 'Lorem ipsum', perfil: 'Lorem ipsum'},
    { id: '8', nombre: 'lorem6', apellido: 'ipsum6', perfil: 'Lorem ipsum', perfil: 'Lorem ipsum'},
    { id: '9', nombre: 'lorem7', apellido: 'ipsum7', perfil: 'Lorem ipsum', perfil: 'Lorem ipsum'}
  ])

  const [profesoresSelect, setProfesoresSelect] = useState([
    { value: '1', label: 'Laura Castañeda' },
    { value: '2', label: 'Jhon Sebastian' },
    { value: '3', label: 'lorem ipsum 1' },
    { value: '4', label: 'lorem ipsum 2' },
    { value: '5', label: 'lorem ipsum 3' },
  ])

  const agregar = () => {
    console.log("Accion de agregar");
    const objeto = { value: '5', label: 'lorem ipsum 3' };
    setProfesoresSelect(objeto);
  }
  
  const editar = () => {
    console.log("Accion de editar");
  }
  
  const eliminar = () => {
    console.log("Accion de eliminar");
  }

  return (
    <ProfesoresContext.Provider value={{profesores, profesoresSelect, agregar, editar, eliminar}}>
        {children}
    </ProfesoresContext.Provider>
  )
}

export default ProfesoresContext;