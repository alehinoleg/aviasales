import React from 'react';

import Logo from '../logo/logo';
import Transplants from '../transplants';
import Tabs from '../tabs';
import Card from '../card';

import styles from './app.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Logo/>
      <div className={styles.wrapper}>
        <Transplants/>
        <div className={styles.wrapperbody}>
          <Tabs/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <div className={styles.button}>
            <button className={styles.moreButton}>Показать еще 5 билетов!</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App;