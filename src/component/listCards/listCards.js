import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../card/card';
import useActions from '../useaction/useaction';


import styles from './listCards.module.scss'

const ListCard = () => {
  //const tickets = useSelector(state => state.tickets);
  const cards = useSelector(state => state.ticketReducer)
  const { tickedLoad } = useActions();
  useEffect(()=>{tickedLoad()}, []) 
  const elment = cards.map((el, id) => {
    return(
      <li className={styles.liCard} key={id}>
        <Card 
          objCard = {el}
        />
      </li>
    )
  })
  return (
    <ul className={styles.ulCard}>
      {elment}
    </ul>
  )
}

export default ListCard;