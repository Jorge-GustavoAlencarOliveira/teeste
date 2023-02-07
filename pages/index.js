import React from "react";
import Link from "next/link";

const API_URL = 'https://api.themoviedb.org/3'
function Home (){  
  const [data, setData] = React.useState(null);

  React.useEffect(()=> {
    async function loadFilms(){
      const response = await fetch(`${API_URL}/movie/now_playing?api_key=7be8057e86b6ba317ae3a5358b11156c`);
      const json = await response.json();
      setData(json.results.slice(0, 10));
      console.log(json.results)
    }
    loadFilms();
  },[])
  
  if(data){
    return (
      <main>
        {data.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} style={{width: '100%'}} alt={item.title}/>
            <Link href={`/filme/${item.id}`}>Acessar</Link>
          </div>          
        ))}
      </main>
    )          
  }
}
export default Home;