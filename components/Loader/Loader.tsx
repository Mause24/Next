import React from 'react'
import styles from './loader.module.css'

const Loader = () => {
  return <div className={styles.container_loader}></div>
  /* 
  ===============================
  ========LOADER DE JEAN=========
  ===============================
  return (
    <div className={styles.loader}>
      <div className={styles.loader__circle} id={styles.circle_1}></div>
      <div className={styles.loader__circle} id={styles.circle_2}></div>
      <div className={styles.loader__circle} id={styles.circle_3}></div>
    </div>
  ) */
}

export default Loader
