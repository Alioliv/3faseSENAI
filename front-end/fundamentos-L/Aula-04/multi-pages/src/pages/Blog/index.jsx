import React, { useEffect, useState } from 'react'
import { Header } from '../../layouts/Header'
import { Footer } from '../../layouts/Footer'


const Blog = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [])
    return (
        <>
            <div className='flex gap-2'>
                {
                    posts.map(post => (
                        <div key={post.id} className='card'>
                            <img src={post.image} alt={post.title} />
                            <h2>{post.title}</h2>
                            <h3>{post.views}</h3>
                            <p>{post.description}</p>
                        <link to= {'post/${post.id}'} className= 'text-white bg-blue-500 houver:bg-blue-700'>
                        Ver mais
                        </link>
                        </div>
                    )
                    )
                }
            </div>
        </>

    )
}

export default Blog