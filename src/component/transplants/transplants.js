import React from 'react';

import styles from './transplants.module.scss'

const Transplants = () => {
  return (
    <div className={styles.panel}>
      <span className={styles.title}>Количество пересадок</span>
      <ul className={styles.listTransplants}>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox}/>
            <span className={styles.liSpan}>Все</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox}/>
            <span className={styles.liSpan}>Без пересадок</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox}/>
            <span className={styles.liSpan}>1 пересадка</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox}/>
            <span className={styles.liSpan}>2 пересадки</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox}/>
            <span className={styles.liSpan}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Transplants;