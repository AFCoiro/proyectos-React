import { useState, useEffect } from "react";
import { getRandomFact } from "./../utils/facts" ;

/*CUSTOM HOOK*/
export function useCatFact (){
  const [facto, setFacto] = useState([]);
  
  const refreshRandomFact = ()=>{
    getRandomFact().then(setFacto)
  }
  useEffect(refreshRandomFact,[])

  return{facto, refreshRandomFact}
}

