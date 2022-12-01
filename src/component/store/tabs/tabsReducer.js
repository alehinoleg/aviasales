import { CHEAP, QUICK, OPTIMAL } from '../../redux/action';

const defaultsorts = {
  cheap: true,
  quick: false,
  optimal: false
}


export const tabsReducer = (state = defaultsorts, action) => {
  switch(action.type) {
  case CHEAP:
    return {
      cheap: true, quick: false, optimal: false
    }
  case QUICK:
    return {
      cheap: false, quick: true, optimal: false
    }
  case OPTIMAL:
    return {
      cheap: false, quick: false, optimal: true
    }
  default: 
    return state;
  }
}