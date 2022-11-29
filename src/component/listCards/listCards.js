import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Card from '../card/card';
import useActions from '../useaction/useaction';


import styles from './listCards.module.scss'

const ListCard = () => {
  const [tickets, setTickets] = useState(5);
  //const tickets = useSelector(state => state.tickets);
  const cards = useSelector(state => state.ticketReducer.data)
  const loader = useSelector(state => state.ticketReducer.loader)
  const tabsReducer = useSelector(state => state.tabsReducer)
  //const filterTickets = useSelector(state => state.filterTickets)
  const { tickedLoad } = useActions();
  useEffect(()=>{tickedLoad()}, []);
 
  
  if (loader) {
    return (
      <span className={styles.loader}></span>
    )
  }

  if (cards.length === 0) {
    return (
      <ul className={styles.ulCard}>
        <li className={styles.liCard}>
          <p style={{textAlign: 'center'}}>Таких билетов нет</p>
        </li>
      </ul>
    )
  }

  if (tabsReducer.cheap) {
    cards.sort((prev, next) => prev.price - next.price );
  }

  if (tabsReducer.quick) {
    cards.sort(
      (prev, next) => {
        return (prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration)
      }
    );
  }

  if (tabsReducer.optimal) {
    cards.sort((prev, next) => {
      return (
        (prev.price - next.price) + ((prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration))
      )
    })
  }

  const el = cards.slice(0, tickets);
  const elment = el.map((el, id) => {
    return(
      <li className={styles.liCard} key={id}>
        <Card 
          objCard = {el}
        />
      </li>
    )
  })
  return (
    <>
      <ul className={styles.ulCard}>
        {elment}
      </ul>
      <div className={styles.button}>
        <button className={styles.moreButton} onClick={() => setTickets((el)=>el + 5)}>Показать еще 5 билетов!</button>
      </div>
    </>
  )
}

export default ListCard;