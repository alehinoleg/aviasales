import { ADD_TICKETS } from '../../redux/action';

export const tickedLoad = () => {
  return async (dispath) => {
    const allTicket = [];
    const searchIds = await fetch('https://aviasales-test-api.kata.academy/search');
    const { searchId } = await searchIds.json();
    const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    const { tickets } = await ticketsResponse.json();
    allTicket.push(...tickets);
    dispath({ type: ADD_TICKETS, payload: allTicket });
  };
};