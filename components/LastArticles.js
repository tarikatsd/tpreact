import React from "react";
import Image from "next/image";
import styles from "../styles/Lastarticles.module.css";

function LastArticles() {
  return (
    <>
      <div>
        <div className={styles.titlelasart}>
          <p>LATEST LAUNCH</p>
          <h2> DIONE SOUNDBAR</h2>

          <img className={styles.img} src="soundbar.png" alt="barre de son" />
          <button className={styles.btn1}>DISCOVERY</button>
        </div>
      </div>
    </>
  );
}

export default LastArticles;
