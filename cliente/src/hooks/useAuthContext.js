import { useContext } from 'react';
import authContext from '../contextos/AuthProvider';

const useAuthContext = () => {
  const contexto = useContext(authContext);
  return contexto;
}

export default useAuthContext;