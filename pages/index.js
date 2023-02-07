import React from "react";
import Link from "next/link";
import styles from './index.module.css'
import { FILM_GET } from "../api";

function Home (){      
  const {data} = FILM_GET();
  
  if(data){
    return (
      <main className="container">
        {data.map(item => (
          <div className={styles.content} key={item.id}>
            <h1 className={styles.title}>{item.title}</h1>
            <img className={styles.img} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
            <Link className={styles.link} href={`/filme/${item.id}`}>Acessar</Link>
          </div>          
        ))}
      </main>
    )          
  }
}
export default Home;