import { Square } from "./Square"


export function Board({board,updateBoard}){
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
}
