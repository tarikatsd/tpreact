import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../styles/Header.module.css";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.divhaut}>
      <FontAwesomeIcon icon={faBars} className={styles.icon} />

        <h1 className={styles.title}>MUSIC STORE</h1>
        <div className={styles.icon}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
        <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
        </div>
      </div>
      <div className={styles.divbas}>
        <div className={styles.text}>
          <p className={styles.text1}>PHANTOM </p>
          <p className={styles.text2}>IMPLOSIVE SOUND </p>
        </div>
        <div className={styles.btnconteiner}>
          <button className={styles.btn1}>DISCOVERY</button>
          <button className={styles.btn2}>BUY</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
