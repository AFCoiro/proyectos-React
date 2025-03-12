import { useState } from 'react'


export function Count({id,stock}) { 
        
    const [count, setCount] = useState(1);

    const addCount =()=>{
      setCount((count)=>count+1)
    }
     const restCount =()=>{
      setCount((count)=>count-1)
    }
     const addOn =()=>{
      console.log(`producto: ${id} --cantidad : ${count}`)
    } 

  return(
    <div className='stockCard'>
      <h3>Item {id}</h3>
    <div className='stockButtons'>
  <button onClick={restCount} disabled={count == 0}>-</button>
      <p>{count}</p>
  <button onClick={addCount} disabled={count >= stock}>-</button>
    </div>
    <button onClick={addOn}>Agregar al carrito</button>
    </div>
    )
}