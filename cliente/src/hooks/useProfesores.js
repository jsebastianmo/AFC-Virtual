import { useContext } from 'react';
import ProfesoresContext from '../contextos/ProfesoresContext';

const useProfesores = () => {
    return useContext(ProfesoresContext);
}

export default useProfesores;