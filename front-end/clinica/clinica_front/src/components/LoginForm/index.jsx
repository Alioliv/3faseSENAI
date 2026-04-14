import React from 'react'

import {toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'



const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

  

    return (
        <div>LoginForm</div>
    )
}

export default LoginForm