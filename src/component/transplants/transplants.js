import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { all, nonStop, oneTransplants, twoTransplants, threeTransplants} from '../redux/action'

import styles from './transplants.module.scss'

const Transplants = () => {
  const state = useSelector(state => state.filterTicket )
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className={styles.panel}>
      <span className={styles.title}>Количество пересадок</span>
      <ul className={styles.listTransplants}>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox} checked={state.all} onChange={() => dispatch(all())}/>
            <span className={styles.liSpan}>Все</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox} checked={state.nonStop} onChange={() => dispatch(nonStop())}/>
            <span className={styles.liSpan}>Без пересадок</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox} checked={state.oneTransplants} onChange={() => dispatch(oneTransplants())}/>
            <span className={styles.liSpan}>1 пересадка</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox} checked={state.twoTransplants} onChange={() => dispatch(twoTransplants())}/>
            <span className={styles.liSpan}>2 пересадки</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox} checked={state.threeTransplants} onChange={() => dispatch(threeTransplants())}/>
            <span className={styles.liSpan}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Transplants;