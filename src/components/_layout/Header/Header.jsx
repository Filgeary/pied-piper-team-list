import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header
      data-testid='header'
      className={styles.header}
    >
      <div
        className={styles.wrapper}
        role='img'
        aria-label='Pied-Piper Full Team photo'
      ></div>
    </header>
  )
}

export default Header
