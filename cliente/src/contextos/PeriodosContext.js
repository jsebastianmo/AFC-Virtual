import { createContext, useState } from 'react';

const PeriodosContext = createContext();

export const PeriodosProvider = ({ children }) => {

  const [periodos, setPeriodos] = useState([
    { value: '1', label: 'Periodo 1' },
    { value: '2', label: 'Periodo 2' },
    { value: '3', label: 'Periodo 3' },
    { value: '4', label: 'Periodo 4' },
    { value: '5', label: 'Periodo 5' },
  ])

  const agregar = () => {
    console.log("Accion de agregar");
    const objeto = { value: '5', label: 'Periodo 5' };
    setPeriodos(objeto);
  }
  
  const editar = () => {
    console.log("Accion de editar");
  }
  
  const eliminar = () => {
    console.log("Accion de eliminar");
  }
  
  return (
    <PeriodosContext.Provider value={{periodos, agregar, editar, eliminar}}>
        {children}
    </PeriodosContext.Provider>
  )
}

export default PeriodosContext;