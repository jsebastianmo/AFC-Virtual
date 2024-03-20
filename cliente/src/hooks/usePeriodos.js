import { useContext } from 'react'
import PeriodosContext from '../contextos/PeriodosContext';

const usePeriodos = () => {
  return useContext(PeriodosContext);
}

export default usePeriodos;