import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.name} ${styles.tituloRebotante}`}>
        Fernando Suppa Nieto
      </h1>
      <p className={styles.description}>
        Actualmente soy estudiante en Henry para la carrera Full Stack
        Developer.
      </p>
    </div>
  );
}
