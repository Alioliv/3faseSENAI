import React, { useEffect, useState } from 'react';

export const CardApi = () => {
    
    const [users, setUsers] = useState([])
    // const [filter]  // Estado que poderia ser usado para filtro futuramente

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
         .then((res) => res.json()) // Converte a resposta para JSON
         .then((data) => setUsers(data)) // Salva os usuários no estado

        // console.log('')
        // console.log('data', data)
        // .then((json) => console.log(json));

    }, []) // Executa apenas quando o componente carregar


    return ( 
    <>
        <div className='style.cardContaApi'>
            {
                users.map((user) =>(
                    <div className='style.card' key={user.id}> 
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.address.street}</p>
                    </div>
                ))
            }

        </div>

    </>
    )
}