import './App.css'
import { useState } from 'react'
import { Square } from './components/Square'
import {TURNS } from './cons'
import {checkWinner, checkEndGame} from './../src/assets/logic/board'
import confetti from 'canvas-confetti' //npm install canvas-confetti -E
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'



function App() {

  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  
  const [winner, setWinner] = useState(null)//null= no hay ganador, false = empate 


  const resetGame =()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')

  }
  const saveGame =()=>{
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
  }
  const updateBoard = (index)=>{
    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(()=>{
        setWinner(newWinner)
        confetti()
      }
      )
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }


  return (
    <main className="board">
        <h1>Ta-Te-Ti</h1>

        <section className='game'>
          {
            board.map((square,index)=>{
              return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
              )
            }
            )
          }
        </section>
        <Board board={board} updateBoard={updateBoard} />
        <section className='turn'>
          <Square isSelected={turn=== TURNS.X} >{TURNS.X}</Square>
          <Square isSelected={turn=== TURNS.O} >{TURNS.O}</Square>
        </section>
                <div className="btn-container">
              <button onClick={resetGame} className='the-btn'>Play Again</button>
              <button onClick={saveGame} className='the-btn'>Save Again</button>
        </div>
        {
          <WinnerModal resetGame={resetGame} winner={winner}/>
        }
    </main>
  )
}

export default App
//Cuando llamo a una funcion dentro de algun parametro o algo, siempre la llamo sin (), porque si yo la llamo, se va a ejecutar siempre que renderice. Yo necesito que la fn se ejecute cuando yo quiero, por eso siempre se llama a la funcion sin (), para que la ejecute cuando quiera, por ejemplo, en un onClick