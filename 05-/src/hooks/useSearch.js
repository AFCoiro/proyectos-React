import { useState, useEffect, useRef } from "react"


export function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirtsInput = useRef(true)

    useEffect(()=>{
        if(isFirtsInput.current){
        isFirtsInput.current = search == ""
        return
        }
        if (search == "") {
            setError('No se puede buscar un vacio')
            return
        }
        setTimeout(() => {
        if (search.length < 3) {
            setError('No se puede buscar algo con menos de 3 caracteres')
            return
        }
        }, 300)
    },[search])
}