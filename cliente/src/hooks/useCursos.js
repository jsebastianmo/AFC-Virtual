import { useContext } from 'react'
import CursosContext from '../contextos/CursosContext';

const useCursos = () => {
  return useContext(CursosContext);
}

export default useCursos;