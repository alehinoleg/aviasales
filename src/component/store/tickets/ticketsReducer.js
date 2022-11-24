import { ADD_TICKETS } from '../../redux/action';

export const ticketReducer = (state = [], action) => {
  switch(action.type) {
  case ADD_TICKETS:
    return [...state, ...action.payload];
  default: 
    return state;
  }
}