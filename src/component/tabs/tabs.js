import React from 'react';
import {  useDispatch } from 'react-redux';

import { cheap, optimal, quick } from '../redux/action';

import styles from './tabs.module.scss'

const Tabs = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.tabsWrap}>
      <button className={`${styles.button}`} onClick={() => dispatch(cheap())}>Самый дешевый</button>
      <button className={styles.button} onClick={() => dispatch(quick())}>Самый быстрый</button>
      <button className={styles.button} onClick={() => dispatch(optimal())}>Оптимальный</button>
    </div>
  )
}

export default Tabs;