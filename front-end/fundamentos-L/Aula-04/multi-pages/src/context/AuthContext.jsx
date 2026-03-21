import {createContext,useContext, useState} from 'react';
import React from 'react';  

const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const login = (email) => {
        setUser({email}) // passando como objeto para pegar mais dados no futuro, caso preciso: ex: setUser({email, name, id})
    }

    const logout = () => {
        setUser(null)
    }   


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children} {/* children é o conteúdo que vai ser envolvido pelo AuthProvider, ou seja, os componentes que precisam acessar o contexto de autenticação. */}
        </AuthContext.Provider>
    )
}


export const useAuth = () =>  useContext(AuthContext) // useContext é um hook do React que permite acessar o valor do contexto AuthContext em qualquer componente que esteja envolvido pelo AuthProvider.

