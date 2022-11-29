import { combineReducers } from 'redux';

import filterTickets from '../redux/reduce';

import { ticketReducer } from './tickets/ticketsReducer';
import { tabsReducer } from './tabs/tabsReducer';

//import { ticketReducer } from './tickets/ticketsReducer';

export const rootReducer = combineReducers({
  ticketReducer,
  filterTicket: filterTickets,
  tabsReducer
});