import MovieList from '../mocks/with-results.json';
import MovieListEmpty from '../mocks/no-results.json';

export  function useMovies() {
    const movies = MovieList.Search;

    const mapMovies = movies?.map(movie=>({
        id : movie.imdbID,
        title : movie.Title,
        poster : movie.Poster,  
        year : movie.Year,
        type : movie.Type,
        rating : movie.imdbRating,
        runtime : movie.Runtime,
        genre : movie.Genre
    }))
    return{movies: mapMovies}
}