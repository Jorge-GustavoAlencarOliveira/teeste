import React from 'react'
import Link from 'next/link';

const Favoritos = () => {
  const [filme, setFilme] = React.useState([]);

  React.useEffect(() => {
    const filmesSalvos = localStorage.getItem('@primeFlix');
    setFilme(JSON.parse(filmesSalvos) || []);  
  },[])
  
  function excluirFilme(id){
    let filmesSalvos = filme.filter(item => item.id !== id)
    setFilme(filmesSalvos);
    localStorage.setItem('@primeFlix', JSON.stringify(filmesSalvos))
  }
  return (
    <div className='container'>
      <h1>Meus Filmes</h1>
      {filme.length === 0 && <p>Voce não possui filme salvo</p>}
      {filme &&
        <ul>
          {filme.map(item => (
            <li key={item.id}>
              <span>{item.title}</span>
              <Link href={`/filme/${item.id}`}> Ver detalhes</Link>   
              <button onClick={() => excluirFilme(item.id)}>Excluir</button>
            </li>
          ))}
        </ul>      
      }
    </div>
  )
}

export default Favoritos;
