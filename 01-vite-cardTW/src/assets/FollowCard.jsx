//children se usa como palabra reservada para llamar a todo lo q este dentro de algo. Acà hay un strong con childen dentro, entonces no tengo q llamar por parametros en App.jsx, diretctamente llama a todo lo que està adentro del <FollowCard>Nombre children</>

import { useState } from "react";


export function FollowCard({children,usuario='Sin Usuario',img,arroba,initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const texto = isFollowing ? 'Siguiendo' : 'Seguir';
    const claseBoton = isFollowing ? 'follow-card-btn is-following' : 'follow-card-btn';

    return(
        <article className='follow-card'>
            <header className='follow-card-header'>
                <img src={`./../public/${img}.png`} alt="foto de perfil" className="follow-card-img"/>
                <div>
                    <strong className="follow-card-name">{children} </strong>
                    <span className="follow-card-user"> {arroba(usuario)} </span>
                </div>
            </header>
            <aside>
                <button className={claseBoton} onClick={()=>{
                    setIsFollowing(!isFollowing);
                }}>
                    <span className="follow-card-btn-text">{texto}</span>
                    <span className="follow-card-btn-stop">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

//usuario='Sin Usuario' en los parametros es cuando , por ejemplo en App.jsx, Manuela Gata no tiene usuario, entonces en lugar de poner nada, pone el valor por defecto que le asignamos en parametro, o sea "Sin Usuario"