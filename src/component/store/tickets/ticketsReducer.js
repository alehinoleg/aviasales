import { ADD_TICKETS } from '../../redux/action';

const loader = {
  data: [],
  loader: true,
}

export const ticketReducer = (state = loader, action) => {
  switch(action.type) {
  case ADD_TICKETS:
    return {...state, data:[...action.payload], loader: false};
  default: 
    return state;
  }
}