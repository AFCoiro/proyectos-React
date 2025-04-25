import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pag/Home';
import Movies  from "./components/Movies/Movies";
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
 
//https://www.omdbapi.com/  https://www.omdbapi.com/?apikey=5fe9fd5d&s=
function App() {

  const {search, setSearch, searchError} = useSearch(); 
  const {movies,error,loading, getMovies,hasSearched} = useMovies({ search });

  const handleChange = (e)=>{
    const newValue = e.target.value;
    if(newValue.startsWith(" "))return;
    setSearch(newValue);
    console.log(`change query: ${search}`)
      }

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  }

  return (
    <>
      <header>
      <form action=""  onSubmit={handleSubmit}>
        <input type="text" placeholder='Buscá tu pelicula' onChange={handleChange} value={search} name='query'/>
        <button>Buscar</button>
      </form>
          {searchError && <p>{searchError}</p>}
      </header>
      <main>
        {loading && <p>Cargando...</p>}

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && !error && <Movies movies={movies} hasSearched={hasSearched}/>}
      </main>
    </>
  )
}

export default App
