 import { useRef, useState } from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ search }) {

  const [movies,setMovies] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); 

  const previusSearch = useRef(search);
  
      const getMovies = async()=>{
        if(search === previusSearch.current) return;
        try{
          setLoading(true)
          setError(null)
          previusSearch.current = search
          const newMovies = await searchMovies({search})
          setMovies(newMovies)

        }catch(e){
          setError(e.menssage)

        }finally{
          setLoading(false)
          setHasSearched(true)
        }

      }
  return{ movies,error,loading,getMovies,hasSearched }
  }