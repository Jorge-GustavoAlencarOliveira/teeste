import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.bg}>
      <div className={`${styles.header} container`}>
        <Link className={styles.logo} href='/' >Prime Flix</Link>
        <Link className={styles.link} href='/favoritos' >Meus filmes</Link>
      </div>
    </header>
  )
}

export default Header
