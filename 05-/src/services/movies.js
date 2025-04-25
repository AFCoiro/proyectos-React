const API_KEY = '5fe9fd5d';

export const searchMovies = async ({ search }) => {
    if (search ==='') return null
    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
        const movies = json.Search

        return movies?.map(
            movie => ({
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              img: movie.Poster
            }))
    }catch(e){
    console.log(e);
     throw new Error("Error searching movies");
    }

}