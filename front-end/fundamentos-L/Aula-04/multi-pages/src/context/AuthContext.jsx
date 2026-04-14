import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const email = localStorage.getItem("email")
        if (email) {
            setUser({ email })
        }
    }, [])

    const setUserAndLocalStorage = (email) => {
        localStorage.setItem("email", email)
        setUser({ email })
    }   
    

    
    const login = (email) => {
        setUser({ email }) // passando como objeto para pegar mais dados no futuro, caso preciso. Ex: setUser({email, name:"Joao",role:"admin"})
    }

    const logout = () => {
        localStorage.removeItem("email")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}


export const useAuth = () => useContext(AuthContext)