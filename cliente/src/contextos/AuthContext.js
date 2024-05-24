import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ( {children} ) => {

  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  
  const login = nuevoUsuario => {
    setUserId(nuevoUsuario.id);
    setToken(nuevoUsuario.token);
    localStorage.setItem('userId', nuevoUsuario.id);
    localStorage.setItem('token', nuevoUsuario.token);
  }

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider value={{userId, token, login, logout}}>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };