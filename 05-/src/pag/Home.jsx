import { useMovies } from '../hooks/useMovies';
import ExportMovies from '../components/Movies/Movies'

export default function Home() {
    const{ movies} = useMovies();

    return(
    <main className='main-app'>
    <h1>05- useMemo, useCallback y useRef</h1>
    <h2>Resultados de peliculas</h2>
    <ExportMovies movies={movies}/>
</main>
)
}