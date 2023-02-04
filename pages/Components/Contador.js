import React from 'react'

const Contador = () => {
  const [contador, setContador] = React.useState(0);
  function handleClick(){
    setContador(contador + 1)
  }

  return (
    <div>
      {contador}
      <button onClick={handleClick}>Adicionar</button>    
    </div>
  )
}

export default Contador
