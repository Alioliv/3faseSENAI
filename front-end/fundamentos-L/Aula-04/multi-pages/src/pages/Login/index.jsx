
import {useState} from 'react'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { form } from 'react-router-dom';    
impo

const Login = () => {

    const [email, setEmail] = useState('')
    const { login } = useAuth() 
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault() // previne o comportamento padrão do formulário, que é recarregar a página ao ser submetido.
        login(email) // dentro de um componente controlado, onde o estado de mudança é gerenciado pelo react 
        navigate('/') // após o login, redireciona para a página inicial. O useNavigate é um hook do React Router que permite programaticamente navegar para uma rota específica. Neste caso, estamos navegando para a rota '/' (página inicial) após o login bem-sucedido.
    }

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <form onSubmit={handleSubmit} className=' p-6 borderrounded shadow-md space-y-4'>
            <h2 className='text-2xl font-bold text-center'>Login</h2>
            <input 
            type="email" 
            placeholder='Digite seu email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className='w-full px-3 py-2 border rounded '
        />

    <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded rouded hover:bg-blue-700'>
        Entrar
        </button> 

        
        </form> 
    </div>
  )
}

export default Login
