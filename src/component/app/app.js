import React from 'react';


import Logo from '../logo/logo';
import Transplants from '../transplants';
import Tabs from '../tabs';
import ListCard from '../listCards';


import styles from './app.module.scss'


const App = () => {
  return (
    <div className={styles.app}>
      <Logo/>
      <div className={styles.wrapper}>
        <Transplants/>
        <div className={styles.wrapperbody}>
          <Tabs/>
          <ListCard/>
        </div>
      </div>
    </div>
  )
}

export default App;