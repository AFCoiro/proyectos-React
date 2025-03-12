import PropTypes from 'prop-types';

export function UserCard({tag1,inTag1,tag2,inTag2,tag3,inTag3,buttonFn}) {
    
    return(

                <article className='follow-card'>
                <header className='follow-card-header'>
                    <button onClick={buttonFn}><img src={`./../public/vite.svg`} alt="foto de perfil" className="follow-card-img"/></button> 
                    <div className="contenedor-datos">
                        <span className="follow-card-name">{tag1}: <span className="follow-card-user"> {inTag1} </span></span>
                        <span className="follow-card-name">{tag2}: <span className="follow-card-user">{inTag2} </span></span>
                        <span className="follow-card-name">{tag3}: <span className="follow-card-user">{inTag3} </span></span>

                    </div>
                </header>
            </article>

    )
}

UserCard.propTypes = {
    tag1: PropTypes.string.isRequired,
    inTag1: PropTypes.string.isRequired,
    tag2: PropTypes.string.isRequired,
    inTag2: PropTypes.string.isRequired,
    tag3: PropTypes.string.isRequired,
    inTag3: PropTypes.string.isRequired,
    buttonFn: PropTypes.any
  };