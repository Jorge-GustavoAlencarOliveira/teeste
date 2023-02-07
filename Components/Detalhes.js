import React from 'react';
import styles from './Filme.module.css';
const API_URL = 'https://api.themoviedb.org/3';

const Detalhes = ({id}) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() =>{
    async function loadFilms(){
      const response = await fetch(`${API_URL}/movie/${id}?api_key=7be8057e86b6ba317ae3a5358b11156c&language=pt-BR`);
      const json = await response.json();
      setData(json);
      console.log(json)
    }
    loadFilms();
  },[id]);

  function salvarFilme(){
    const minhaLista = localStorage.getItem('@primeFlix');
    let filmesSalvos = JSON.parse(minhaLista) || [];
    console.log(filmesSalvos)
    const hasFilme = filmesSalvos.some(filme => filme.id === data.id);
    if (hasFilme){
      alert('Esse filme já está salvo');
    } else {
      filmesSalvos.push(data);
      localStorage.setItem('@primeFlix', JSON.stringify(filmesSalvos));
      alert('Filme adicionado aos favoritos')
    }
  }

  if(data){
    return (
      <div className={`${styles.info} container`}>
        <h1 className={styles.title}>{data.title}</h1>
        <img 
          className={styles.img} 
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} 
          alt={data.original_title} />
        <p className={styles.text}><strong>Sinopse: </strong>{data.overview}</p>
        <span>Avaliação: {Math.ceil(data.vote_average)} / 10</span>
        <div className={styles.button}>
          <button onClick={salvarFilme}>Salvar</button>
          <a 
            target='blank'
           rel='external' 
           href={`https://youtube.com/results?search_query=${data.original_title} trailer`}>Trailer</a>
        </div>
      </div>
    )
  }
}

export default Detalhes


