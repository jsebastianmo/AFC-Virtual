import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';

const authContext = createContext();

export const AuthProvider = ( {children} ) => {

  const { auth, setAuth } = useAuth();
  
  return (
    <authContext.Provider value={{auth, setAuth}}>
      { children }
    </authContext.Provider>
  )
}

export default authContext;