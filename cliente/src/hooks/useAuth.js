import React, { useEffect, useState } from 'react'

const useAuth = () => {

    const [ auth, setAuth ] = useState();

    useEffect(()=>{
        getAuth();
    }, []);

    const getAuth = async ()=>{
        const token = "token de prueba";
        setAuth(token);
    };

    return {
        auth,
      setAuth
    }
}

export default useAuth;