import './App.css'
import Movies from './components/movies'
import MovieList from './mocks/with-results.json';
import MovieListEmpty from './mocks/no-results.json';

//https://www.omdbapi.com/  https://www.omdbapi.com/?apikey=5fe9fd5d&s=
function App() {
  const movies = MovieList.Search;
  
  return (
    <>
    <header className='header-app'>
      <form action="" className='form'>
          <input type="text" name="" id="" placeholder='Buscá tu pelicula' />
          <button type='submit'>Buscar</button>
        </form>
    </header>

      <main className='main-app'>
      <h1>05- useMemo, useCallback y useRef</h1>
          <h2>Resultados de peliculas</h2>
          <ul>
            {
            movies.map((movie) => (
              <li key={movie.imdbID}>
                <Movies movie={movie} />
              </li>
              ))}
          </ul>

      </main>
    </>
  )
}

export default App
