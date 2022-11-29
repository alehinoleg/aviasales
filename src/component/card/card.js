import React from 'react';

import styles from './card.module.scss'


const Card = (objCard) => {
  const {price, carrier, segments} = objCard.objCard
  const stops1 = segments[0].stops;
  const stops2 = segments[1].stops;
  const time1 = segments[0].date.slice(11, 16)
  const time2 = segments[1].date.slice(11, 16)
  const duration1 = segments[0].duration;
  const hours1 = Math.trunc(duration1/60);
  const min1 = duration1%60;
  const duration2 = segments[1].duration;
  const hours2 = Math.trunc(duration2/60);
  const min2 = duration2%60;
  
  const massiv = time1.split(':');
  const min = (Number(massiv[0]) * 60) + Number(massiv[1])+ duration1;
  let h = Math.trunc(min/60);
  const m = min%60
  if (h > 24) {h = h - 24}

  const massiv2 = time1.split(':');
  const min22 = (Number(massiv2[0]) * 60) + Number(massiv2[1])+ duration2;
  let h2 = Math.trunc(min22/60);
  const m2 = min%60
  if (h2 > 24) {h2 = h2 - 24}
  return (
    <>
      <div className={styles.block}>
        <span className={styles.price}>{String(price).slice(0, 2) + ' ' + String(price).slice(2)}</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`}></img>
      </div>
      <table className={styles.table}>
        <tr>
          <th>{`${segments[0].origin}-${segments[0].destination}`}</th>
          <th>В пути</th>
          <th>{`${stops1.length} ${stops1.length === 0? 'пересадок': 'пересадки'}`}</th>
        </tr>
        <tr className={styles.trMargin}>
          <td>{`${time1} - ${h}:${m}`}</td>
          <td>{`${hours1}ч ${min1}м`}</td>
          <td>{stops1.join(' ')}</td>
        </tr>
      </table>
      <table className={styles.table}>
        <tr>
          <th>{`${segments[1].origin}-${segments[1].destination}`}</th>
          <th>В пути</th>
          <th>{`${stops2.length} пересадки`}</th>
        </tr>
        <tr>
          <td>{`${time2} - ${h2}:${m2}`}</td>
          <td>{`${hours2}ч ${min2}м`}</td>
          <td>{stops2.join(' ')}</td>
        </tr>
      </table>
    </>
  )
}

export default Card;