import { useState, useEffect } from 'react'
import './App.css'
import { Count } from './assets/components/count'


//02 items y getPorducts son para el useEffect 02
//array con datos para mostrar
const Items = [
  {
  id:1,
  stock:2
  },
  {
  id:2,
  stock:3
  },
  {
  id:3,
  stock:4
  }
]
//funcion para obtener productos con promesas y un setTimeout
const getProducts =()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(Items),
      reject('error' )
    },2000)

  })
}

//***COMPONENTE***

function App() {

  //01 - USE-EFFECT PARA LLAMAR UNA API
  const [pokemonList, setPokemonList] =useState([]);
  const [error, setError] =useState(null);
  const [loading, setLoading] = useState(true);
  const [limit,setLimit]  = useState(3)
  const [inputValue, setInputValue] = useState(3);

  useEffect(()=>{
    const fetchPokemon = async () => {
      try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        if(!respuesta.ok){
          throw new Error(`Estado de error: ${respuesta.status}`)
          //esto es cuando la solicitud es correcta pero el servidor es el que responde con un error.fetch no lo trata como un error automáticamente(por eso no salta en el catch). Simplemente devuelve un objeto Response con la propiedad ok en false.
        }
        const pokemon = await respuesta.json();//convierte la respuesta a json
        
        const listaPokemon = await Promise.all(//Promise.all es porque espera a que todas las llamadas fetch finalicen antes de devolver los resultados.Esto es para procesar múltiples llamadas en paralelo y devolver un array con todos los resultados cuando estén.
          pokemon.results.map(async(pokemon) => {//se hace un map para hacer un fetch a cada url de cada pokemon
            const detallesPokemon = await fetch(pokemon.url);
            const detallesPokemonJson = await detallesPokemon.json();
            return  {                                        
              name: detallesPokemonJson.name,
              image: detallesPokemonJson.sprites.front_default,         
            };
            })
            );
            setPokemonList(listaPokemon);
          } catch (error) {
            setError(error.message); // Maneja el error
          } finally {
            setLoading(false); // Siempre dejar de cargar, ya sea éxito o error
          }
        };
      
        fetchPokemon();
      }, [limit]);//se vuelve a ejecutar cuando cambia el limit, o sea, cuando ingreso en input un valor

        // Manejador para actualizar el estado del input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setLimit(Number(inputValue)); // Actualiza el límite con el valor del input
  };

//02 - USE-EFFECT PARA  que llama a getProducts y asi mostrar el array
  const [item, setItem] = useState([])

  useEffect(() => {
    getProducts()
    .then((res)=>{
      console.log("Products responded",res)
      setItem(res)
    })
    .catch((err)=>{
      console.log("Products failed",err)
    })
    .finally(()=>{
      console.log("Products finished")
    })
  },[])

//03 - USE-EFFECT PARA SUMAR A MEDIDA QUE SE HACE CLICK
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El contador cambió a: ${contador}`);
  }, [contador]); // Se ejecuta cada vez que "contador" cambia


//04 - USE-EFFECT PARA HACER DE CRONOMETRO. SE REINICIA CUANDO SE HACE CLICK
  const [segundos, setSegundos] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setSegundos((segundos)=>segundos+1)
      },1000)

      return ()=>clearInterval(interval)
      },[]);
      const handleDelete = () => {
        setSegundos(0);
      }

//05 - USE-EFFECT PARA QUE SE ACTIVE Y DESAACTIVe CON EL BOTON UN A BOLITA QUE SIGUE AL MOUSE
  const [enabled,setEnabled] = useState(false);
  const [position,setPosition] = useState({x:0,y:0})
  const [visible,setVisible] = useState(false)//para que el puntero no se vea cuanso se haga el cleanup del useEffect(en el return()=>{})
      useEffect(()=>{
        console.log("el boton esta:",{enabled})

        const handleMove = (event)=>{
          const {clientX, clientY} = event
          setPosition({x:clientX,y:clientY})
        }
        if(enabled){
          setVisible(true);
          window.addEventListener('pointermove',handleMove)
        }
return()=>{
  window.removeEventListener('pointermove',handleMove)
  setVisible(false);

}
      },[enabled])

//06 - USE-EFFECT PARA QUE SE CAMBIE EL CURSOR DEL MOUSE
useEffect(()=>{
  document.body.classList.toggle('cambio-cursor', enabled)
  return()=>{
    document.body.classList.remove('cambio-cursor')

  }
},[enabled])

/*LO QUE DEVUELVE(MUESTRA) EL COMPONENTE*/

  return (
    <>
      <h1>Aprendiendo useEffect</h1>

{/*01*/}
    <div>
       <h2>Pokédex</h2>

       <form onSubmit={handleSubmit}>
        <label htmlFor="pokemon-limit">Cantidad de Pokémon:</label>
        <input
          id="pokemon-limit"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          min="1"
        />
        <button type="submit">Buscar</button>
      </form>

          {loading && <p style={{ color: "green" }}>Cargando Pokémon...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}

          {pokemonList.length > 0 && ( 
            <div className='contenedor-pokemon'>
              {pokemonList.map((pokemon, index) => (
                <div  key={index} className='card-pokemon'>
                <h4>{pokemon.name}</h4> 
                <img src={pokemon.image} alt={`imagen ${pokemon.name}`} />
                </div>
             ))}
          </div>
          )}
    </div> 
{/*02*/}
      <section className='contCards'>
        {

        item.map(({id,stock})=>{

          return(

            <Count key={id} id={id} stock={stock} />
          )
        })
        }

      </section>

{/*03*/}
        <div style={{padding:'20px 0'}}>
            <p>Has hecho clic {contador} veces</p>
            <button onClick={() => setContador(contador + 1)}> sumar clicks</button>
        </div>

{/*04*/}
        <div style={{padding:'20px 0'}}>
            <p>tu tiempo queó en {segundos} segundos</p>
            <button onClick={handleDelete}>Volver a 0. </button>
        </div>

 {/*05*/}
        <div>
            <button onClick={()=>setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} el puntero </button>
        </div>

        {visible &&(//condicional. si visible es true, se muestra, sino, no se renderiza
              <div style={{
                position:'absolute',
                backgroundColor:'yellow',
                borderRadius:'50%',
                opacity:'0.5',
                pointerEvents:'none',
                top:-20,
                left:-20,
                width:40,
                height:40,
                transform:`translate(${position.x}px,${position.y}px)`
              }}/>
            )}


    </>

  );
}

export default App


/*Para llamar a una fn con parametros dentro de un event, tengo que llamarla dentro de una =>
  const sumar= (a,b)=>{
    return a+b
    }
    <button onClick={()=>sumar(1,2)}></button>
  */

    //crear un item.jsx y un itemList.jsx llamando por promise




