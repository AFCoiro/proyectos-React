
import { PropTypes } from "prop-types"

export function WinnerModal({winner,resetGame }){
    if (winner === null) return null

    const winnerText = winner === false ? "It's a tie!" : `Player ${winner} wins!`
    return (

            <section className='winner'>
              <div className="text">
                <h2>
                    {winnerText}
                </h2>
                <button onClick={resetGame} className='the-btn'>Play Again</button>

              </div>
            </section>         
        )
}

WinnerModal.propTypes= {
  winner: PropTypes.any.isRequired,
  resetGame: PropTypes.any.isRequired
}