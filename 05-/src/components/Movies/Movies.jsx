 import './movies.css'
//  function Movies({movie}) {

//     return(
//         <>
//             <h3>{movie.title}</h3>
//             <h4>{movie.year}</h4>
//             <img src={`${movie.poster}`} alt="" />
//         </>
//     )
// }
//  function ErrorMovies() {

//     return(
//             <h1>MovieListEmpty.Error</h1>
//     )
// }

// export function ExportMovies({movies}){
//     const hasMovies = movies?.length > 0;

//     return(
//      <section className='sectionMovies'>  
//         {
//         hasMovies ? (
//             movies.map((movie) => (
//             <div key={movie.id} className='itemMovie'>
//             <Movies movie={movie} />
//             </div>
//             ))
        
//         ) :(
//         <ErrorMovies/>
//         )
//         }
//     </section> 
//   )
// } 
// export default ExportMovies


export function ListOfMovies({movies}){
    return(
        movies.map(mov=>(
            <div key={mov.id}>
              <h2>{mov.title}</h2>
              <img src={mov.img} alt={mov.title} />
            </div>
          ))
    )
}

export function NoResults() {
    return(
    <p>No se encontraron peliculas</p>
)
}



function Movies({movies,hasSearched}) {
    const hasMovies = movies?.length > 0;
return(
<>
<h1>Tus peliculas en el mejor lugar</h1>
{
  hasMovies?
  (
    <ListOfMovies movies={movies} />
  ):(
    hasSearched && <NoResults />
  )
}
</>
);

}
export default Movies
