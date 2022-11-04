import React from 'react';

import logoAvia from './S7Logo.svg'
import styles from './card.module.scss'

const Card = () => {
  return (
    <ul className={styles.ulCard}>
      <li className={styles.liCard}>
        <div className={styles.block}>
          <span className={styles.price}>13 400 Р</span>
          <img src={logoAvia}></img>
        </div>
        <table className={styles.table}>
          <tr>
            <th>MOW – HKT</th>
            <th>В пути</th>
            <th>2 пересадки</th>
          </tr>
          <tr className={styles.trMargin}>
            <td>10:45 – 08:00</td>
            <td>21ч 15м</td>
            <td>HKG, JNB</td>
          </tr>
        </table>
        <table className={styles.table}>
          <tr>
            <th>MOW – HKT</th>
            <th>В пути</th>
            <th>1 пересадка</th>
          </tr>
          <tr>
            <td>11:20 – 00:50</td>
            <td>13ч 30м</td>
            <td>HKG</td>
          </tr>
        </table>
      </li>
    </ul>
  )
}

export default Card;