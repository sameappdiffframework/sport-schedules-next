
import React from 'react'
import styles from '../styles/header.module.scss'

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.brand}><a href="/">Sport schedules</a></li>
          <li>Filters</li>
        </ul>
      </nav>
    </header>
  )
}
