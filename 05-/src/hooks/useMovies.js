import { useEffect, useState } from 'react';

export  function useMovies() {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const fetchMovies = async () => {
            try{
                //`https://www.omdbapi.com/?apikey=5fe9fd5d&s=${searchMovies}`
                const respuesta = await fetch(`/mocks/with-results.json`)
                const datos = await respuesta.json()
                if(datos.Response ==="True"){
                    setMovies(datos.Search)
                }else{
                    setError(datos.Error)
                }

            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false)
            }
        }
        fetchMovies();
    },[])

    const mapMovies = movies?.map(movie=>({
        id : movie.imdbID,
        title : movie.Title,
        poster : movie.Poster,   
        year : movie.Year,
        type : movie.Type,
    }))
    return {
        movies: mapMovies,
        loading,
        error
      };
}