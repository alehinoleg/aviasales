import { CHEAP, QUICK, OPTIMAL } from '../../redux/action';

const defaultsorts = {
  cheap: true,
  quick: false,
  optimal: false
}


export const tabsReducer = (state = defaultsorts, action) => {
  switch(action.type) {
  case CHEAP:
    console.log(state);
    return {
      cheap: true, quick: false, optimal: false
    }
  case QUICK:
    console.log(state);
    return {
      cheap: false, quick: true, optimal: false
    }
  case OPTIMAL:
    console.log(state);
    return {
      cheap: false, quick: false, optimal: true
    }
  default: 
    return state;
  }
}