import './movies.css'
 function Movies({movie}) {

    return(
        <>
            <h3>{movie.title}</h3>
            <h4>{movie.year}</h4>
            <img src={`${movie.poster}`} alt="" />
        </>
    )
}
 function ErrorMovies() {

    return(
            <h1>MovieListEmpty.Error</h1>
    )
}

export function ExportMovies({movies}){
    const hasMovies = movies?.length > 0;

    return(
     <section className='sectionMovies'>  
        {
        hasMovies ? (
            movies.map((movie) => (
            <div key={movie.id} className='itemMovie'>
            <Movies movie={movie} />
            </div>
            ))
        
        ) :(
        <ErrorMovies/>
        )
        }
    </section> 
  )
} 
export default ExportMovies