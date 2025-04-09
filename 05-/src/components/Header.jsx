import { useRef } from "react"


export default function Header() {

    const inputRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
       const value = inputRef.current.value;
       console.log(value);
    }

    return(
        <header className='header-app'>
        <form action="" className='form' onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" name="" id="" placeholder='Buscá tu pelicula' />
            <button type='submit' >Buscar</button>
          </form>
      </header>
    )
}