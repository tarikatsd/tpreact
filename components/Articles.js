import React from "react";
import styles from "../styles/Article.module.css";

export default function Articles(props) {
  return (
    <>
      <div className={styles.artilcles}>
        <div className={styles.desc}>
          <h3 className={styles.name}>{props.name}</h3>
          <p className={styles.para}>{props.description}</p>
          <button className={styles.btn1}>DISCOVERY</button>
        </div>

        <div className={styles.img}>
          <img src={props.image} alt={props.description} />
        </div>

      </div>
    </>
  );
}
