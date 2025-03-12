import './App.css'
import { useEffect, useState } from 'react'
import { UserCard } from '../components/UserCard';
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from "./hooks/useCatImage";
function App() {

const [datos, setDatos] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      console.log(data)
    setDatos(data);
      
    })
  },[]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setPokemon(data.results);
      console.log(data.results)
    })
  },[])


  /*PRUEBA TECNICA
-Recuperar un hecho aleatorio de gatos de la primera API
-Recuperar la primera palabra del hecho
-muestra una imagen de un gato con la primera palabra
  */
const { facto, refreshRandomFact } = useCatFact();  
const { imageURL, loading } = useCatImage({ facto, font: '60', color: 'yellow' });

const HandleChangeFact = async () => {
  refreshRandomFact();  
};

  return (
    <>
    <h1 className='text-center'>PROYECTO 04: API</h1>  
      <div>
        <h2 className='text-center'>API placeholder de usuarios</h2>

        <div className='text-center'>

          <h3>PRUEBA TÉCNICA</h3>

          <button onClick={HandleChangeFact}>change</button>

          <p>the cat-fact is: {facto}</p>
        {loading ? (
        <p>Loading...</p> 
        ):( 
        <img src={imageURL} alt="gato"/>
        )
        }
        </div>

        <section className='section-cards-app'>
            {
            datos.map((dat)=>{
              const favoritePokemon = pokemon[dat.id - 1] ? pokemon[dat.id - 1].name : 'Unknown';
              return(
              <div key={dat.id}>
              <UserCard 
              tag1='Nombre'
              inTag1={dat.name}
              tag2='e-mail'
              inTag2={dat.email}
              tag3='Pokemon favorito'
              inTag3={favoritePokemon}
              />
              </div>);
            })
          }
          
      </section>
      <h2 className='text-center'>API Pokemon con usuarios random</h2>
        <section className='section-cards-app'>
            {
              pokemon.map((pok)=>{
                const randomUser = datos.length > 0 ? datos[Math.floor(Math.random() * datos.length)] : null;
                return(
                <div key={pok.id}>
                <UserCard 
                    tag1='Nombre de Pokemon'
                    inTag1={pok.name}
                    tag2="URL del Pokemon"
                    inTag2={pok.url}
                    tag3="Usuario asignado"
                    inTag3={randomUser ? randomUser.name : 'Desconocido'}
                    //buttonFn={}
            
                    />
                </div>);
                })  
          }
      </section>
      </div>
      
    </>
  )
}

export default App


      


