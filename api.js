export const API_URL = 'https://api.themoviedb.org/3'

export function FILM_GET(){
  return ({
    url: API_URL + '/movie/now_playing',
    options: {
      api_key: '7be8057e86b6ba317ae3a5358b11156c',
      language: 'pt-BR',
      page: 1,
    }
  })
  
}