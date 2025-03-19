import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pag/Home';
 
//https://www.omdbapi.com/  https://www.omdbapi.com/?apikey=5fe9fd5d&s=
function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
