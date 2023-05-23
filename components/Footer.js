import React from 'react'
import styles from '../styles/Footer.module.css' 

function Footer() {
  return (
    <ul className={styles.footer}>
      <li>ABOUT</li>
      <li>CONTACT</li>
      <li>SUPPORT</li>
      <li>STORES</li>
    </ul>
  )
}

export default Footer