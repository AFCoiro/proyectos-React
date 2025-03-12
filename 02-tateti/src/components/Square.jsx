export function Square({children,isSelected, updateBoard, index }){
    const classSelected = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick =()=>{
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={classSelected}>
        {children}
      </div>
    )
  }