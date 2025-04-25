 import { useState } from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ search }) {
  const [movies,setMovies] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); 

  
      const getMovies = async()=>{

        try{
          setLoading(true)
          setError(null)
          setHasSearched(true)
          const newMovies = await searchMovies({search})
          setMovies(newMovies)

        }catch(e){
          setError(e.menssage)

        }finally{
          setLoading(false)
        }

      }
  return{ movies,error,loading,getMovies,hasSearched }
  }