import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href='/' >Prime Flix</Link>
      <Link className={styles.link} href='/favoritos' >Meus filmes</Link>
    </header>
  )
}

export default Header
