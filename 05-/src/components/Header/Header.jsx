import './header.css'
import { useSearch } from "../../hooks/useSearch";

export default function Header() {

    const {search,setSearch,error} = useSearch();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(search)
    }
    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log('search change ')
      };
    return(
        <header className='header-app'>
        <form action="" className='form' onSubmit={handleSubmit}>
            <input value={search}  onChange={handleChange} type="text" className={`inputSearch ${error ? 'error' : ''}`} placeholder='Buscá tu pelicula' />
            <button type='submit' >Buscar</button>
          </form>
          {error && <p className="errorSearch">{error}</p>}
      </header>
    )
}