import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Card from '../card/card';
import useActions from '../useaction/useaction';


import styles from './listCards.module.scss'

const ListCard = () => {
  const [tickets, setTickets] = useState(5);
  //const tickets = useSelector(state => state.tickets);
  const allCards = useSelector(state => state.ticketReducer.data)
  const loader = useSelector(state => state.ticketReducer.loader)
  const tabsReducer = useSelector(state => state.tabsReducer)
  const transplants = useSelector(state => state.filterTicket)
  
  //const filterTickets = useSelector(state => state.filterTickets)
  const { tickedLoad } = useActions();
  useEffect(()=>{tickedLoad()}, []);
  
  let cards = [];
  
  if (loader) {
    return (
      <span className={styles.loader}></span>
    )
  }

  for (const property in transplants) {
    if (property === 'all') {
      console.log(property)
      transplants[property] ? (cards.all = [...allCards]) : (cards = []);
    } else
    if (property === 'nonStop') {
      console.log(property)
      const without = [...allCards].filter(
        (card) => card.segments[0].stops.length === 0 && card.segments[1].stops.length === 0
      );
      transplants[property] ? (cards.without = [...without]) : delete cards.without;
    } else
    if (property === 'oneTransplants') {
      console.log(property)
      const one = [...allCards].filter(
        (card) => card.segments[0].stops.length === 1 && card.segments[1].stops.length === 1
      )
      transplants[property] ? (cards.one = [...one]) : delete cards.one;
    } else 
    if (property === 'twoTransplants') {
      const two = [...allCards].filter(
        (card) => card.segments[0].stops.length === 2 && card.segments[1].stops.length === 2
      );
      transplants[property] ? (cards.two = [...two]) : delete cards.two;
    }
    if (property === 'threeTransplants') {
      console.log(property)
      const three = [...allCards].filter(
        (card) => card.segments[0].stops.length === 3 && card.segments[1].stops.length === 3
      );
      transplants[property] ? (cards.three = [...three]) : delete cards.three;
    }
  }
  console.log(cards)

  if (cards.all) {
    cards = cards.all;
  } else {
    Object.values(cards).forEach((item) => cards.push(...item));
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

  console.log([...cards]);
  const el = [...cards].slice(0, tickets);
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