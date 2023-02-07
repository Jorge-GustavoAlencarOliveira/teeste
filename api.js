import React from "react";
const API_URL = 'https://api.themoviedb.org/3'

export function FILM_GET(){
    const [data, setData] = React.useState(null);
    React.useEffect(() =>{
      async function loadFilms(){
        const response = await fetch(`${API_URL}/movie/now_playing?api_key=7be8057e86b6ba317ae3a5358b11156c&language=pt-BR`);
        const json = await response.json();
        setData(json.results.slice(0, 10));
        return loadFilms();
      }
      loadFilms();
    },[])
    return {
      data
    };
}

