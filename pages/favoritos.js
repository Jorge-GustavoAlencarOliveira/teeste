import React from 'react'
import Link from 'next/link';
import styles from './Favoritos.module.css';

const Favoritos = () => {
  const [filme, setFilme] = React.useState([]);
 
  React.useEffect(() => {
    const saveFilms = localStorage.getItem('@primeFlix');
    setFilme(JSON.parse(saveFilms) || []);  
  },[])
  
  function excluirFilme(id){
    let uptadeFilms = filme.filter(item => item.id !== id)
    setFilme(uptadeFilms);
    localStorage.setItem('@primeFlix', JSON.stringify(uptadeFilms))
  }
  return (
    <div className='container'>
      <h1 className={styles.title}>Meus Filmes</h1>
      {filme.length === 0 && <p>Voce não possui filme salvo.</p>}
      {filme &&
        <ul>
          {filme.map(item => (
            <li className={styles.content} key={item.id}>
              <span>{item.title}</span>
              <div className={styles.button}>
                <Link href={`/filme/${item.id}`}> Ver detalhes</Link>   
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>      
      }
    </div>
  )
}

export default Favoritos;
