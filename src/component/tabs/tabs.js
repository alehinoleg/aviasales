import React from 'react';

import styles from './tabs.module.scss'

const Tabs = () => {
  return (
    <div className={styles.tabsWrap}>
      <button className={`${styles.button} ${styles.active}`}>Самый дешевый</button>
      <button className={styles.button}>Самый быстрый</button>
      <button className={styles.button}>Оптимальный</button>
    </div>
  )
}

export default Tabs;