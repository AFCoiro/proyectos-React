import PropTypes from 'prop-types';

export function ModalItem({nombre,email,pokemon}) {



    return(
        <section className='modal-item'>
            <div className='modal-card'>
                    <div>
                        <h2>{pokemon}</h2>
                    </div>
                    <img src={`./../public/vite.svg`} alt="foto de perfil" className="follow-card-img"/>
                    <div className="contenedor-datos">
                        <h3>Maestro pokemon: {nombre}</h3>
                        <p>Contacto: {email}</p>
                    </div>
                    <button>Contactar</button>
            </div>
        </section>
    )  
}

ModalItem.propTypes = {
    nombre: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    pokemon: PropTypes.string.isRequired,
  };