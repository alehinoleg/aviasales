
import { ADD_TICKETS } from '../../redux/action';

const getTickets = async (searchId) => {
  const ticketsResult = [];
  try {
    const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    const { tickets, stop } = await ticketsResponse.json();
    ticketsResult.push(...tickets);
    if (!stop) {
      ticketsResult.push(...(await getTickets(searchId)));
    }
  } catch (e) {
    if (e.name === 'SyntaxError') {
      ticketsResult.push(...(await getTickets(searchId)));
    }
  }
  return ticketsResult;
};

export const tickedLoad = () => {
  return async (dispath) => {
    const searchIds = await fetch('https://aviasales-test-api.kata.academy/search');
    const { searchId } = await searchIds.json();
    
    const payload = await getTickets(searchId)
       
    dispath({type: ADD_TICKETS, payload})
  };
};