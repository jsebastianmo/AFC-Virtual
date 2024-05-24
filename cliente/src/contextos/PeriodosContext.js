import { createContext, useState } from 'react';

const PeriodosContext = createContext();

export const PeriodosProvider = ({ children }) => {

  const [periodos, setPeriodos] = useState([
    { id: '1', nombre: 'Laura Valentina'},
    { id: '2', nombre: 'Jhon Sebastian'},
    { id: '3', nombre: 'lorem1'},
    { id: '4', nombre: 'lorem2'},
    { id: '5', nombre: 'lorem3'},
    { id: '6', nombre: 'lorem4'},
    { id: '7', nombre: 'lorem5'},
    { id: '8', nombre: 'lorem6'},
    { id: '9', nombre: 'lorem7'}
  ])

  const [periodosSelect, setPeriodosSelect] = useState([
    { value: '1', label: 'Periodo 1' },
    { value: '2', label: 'Periodo 2' },
    { value: '3', label: 'Periodo 3' },
    { value: '4', label: 'Periodo 4' },
    { value: '5', label: 'Periodo 5' },
  ])

  const agregar = () => {
    const objeto = { value: '5', label: 'Periodo 5' };
    setPeriodosSelect(objeto);
  }
  
  const editar = () => {
    console.log("Accion de editar");
  }
  
  const eliminar = () => {
    console.log("Accion de eliminar");
  }
  
  return (
    <PeriodosContext.Provider value={{periodos, periodosSelect, agregar, editar, eliminar}}>
        {children}
    </PeriodosContext.Provider>
  )
}

export default PeriodosContext;