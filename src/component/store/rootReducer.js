import { combineReducers } from 'redux';

import filterTickets from '../redux/reduce';

import { ticketReducer } from './tickets/ticketsReducer';

//import { ticketReducer } from './tickets/ticketsReducer';

export const rootReducer = combineReducers({
  ticketReducer,
  filterTicket: filterTickets
});