import { useState, useEffect, useRef } from "react"


export function useSearch() {
    const [search, setSearch] = useState('')
    const [searchError, setSearchError] = useState(null)
    const isFirtsInput = useRef(true)

    useEffect(()=>{
        if(isFirtsInput.current){
        isFirtsInput.current = search == ""
        return
        }
        const timeoutId = setTimeout(() => {
        if (search == "") {
            setSearchError('No se puede buscar un vacio')
            return
        }
        
            if (search.length < 3) {
                setSearchError('No se puede buscar algo con menos de 3 caracteres')
            return
        }
        setSearchError(null);
        }, 1000)
        return () => clearTimeout(timeoutId);

    },[search])
    return { search, setSearch, searchError };

}