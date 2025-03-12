import './App.css'
import {FollowCard} from './FollowCard.jsx'
import { useState } from 'react'

const usuarios = [
{
    id: 1,
    usuario: 'juanporo18',
    nombre: 'Juan Poroto',
    isFollowing: false
},
{
    id: 2,
    usuario: 'Belu88',
    nombre: 'Belén Mecmec',
    isFollowing: true
},
{
    id: 3,
    usuario: 'miduDev',
    nombre: 'Midu Dev',
    isFollowing: false
}
]

export function App(){
    const addAt = (usuario)=>`@${usuario}`

    return(
        <section className='section-cards-app'>
            {
            usuarios.map(({id, usuario, nombre, isFollowing})=>(
            <FollowCard 
                usuario={usuario} 
                img='profile-1' 
                initialIsFollowing={isFollowing} 
                arroba={addAt} 
                key={id}>
                    <h1>{nombre}</h1>
            </FollowCard>
            ))
            }
        </section>
    )
}
//La explicación de Children en FollowCard.jsx es el porqué los contenidos son un h1,p y nada. Porque el children es todo lo que este dentro de <FollowCard>, no importa que sea

