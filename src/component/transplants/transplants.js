import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { allFunc, noTransferFunc, oneTransferFunc, twoTransferFunc, threeTransferFunc } from '../redux/action';

import styles from './transplants.module.scss'


const Transplants = () => {
  const dispatch = useDispatch();
  const all = useSelector(state => state.all);
  const noTransfer = useSelector(state => state.noTransfer);
  const oneTransfer = useSelector(state => state.oneTransfer);
  const twoTransfer = useSelector(state => state.twoTransfer);
  const threeTransfer = useSelector(state => state.threeTransfer);
  return (
    <div className={styles.panel}>
      <span className={styles.title}>Количество пересадок</span>
      <ul className={styles.listTransplants}>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox} checked = {all} onClick={() => dispatch({type:allFunc})}/>
            <span className={styles.liSpan}>Все</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox} checked = {noTransfer} onClick={() => dispatch({type:noTransferFunc})}/>
            <span className={styles.liSpan}>Без пересадок</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox} checked = {oneTransfer} onClick={() => dispatch({type:oneTransferFunc})}/>
            <span className={styles.liSpan}>1 пересадка</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox} checked = {twoTransfer} onClick={() => dispatch({type:twoTransferFunc})}/>
            <span className={styles.liSpan}>2 пересадки</span>
          </label>
        </li>
        <li className={styles.listTransplantsLi}>
          <label>
            <input type="checkbox" className={styles.checkbox} checked = {threeTransfer} onClick={() => dispatch({type:threeTransferFunc})}/>
            <span className={styles.liSpan}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Transplants;