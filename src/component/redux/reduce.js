import {ALL, NONSTOP, ONETRANSPLANTS, TWOTRANSPLANTS, THREETRANSPLANTS} from './action'

const defaultAvia = {
  all: true,
  nonStop: true,
  oneTransplants: true,
  twoTransplants: true,
  threeTransplants: true
}

export const filterTickets = (state = defaultAvia, action) => {
  const {all, nonStop, oneTransplants, twoTransplants, threeTransplants} = state;
  switch (action.type) {
  case ALL:
    return  {
      all: !all,
      nonStop: !all,
      oneTransplants: !all,
      twoTransplants: !all,
      threeTransplants: !all,
    }
  case NONSTOP:
    if (all === true && nonStop === true && oneTransplants === true && twoTransplants === true && threeTransplants === true) {
      return {...state, nonStop: !nonStop, all: !all}
    }
    if (oneTransplants === true && twoTransplants === true && threeTransplants === true &&  nonStop === false && all === false)  {
      return {...state, nonStop: !nonStop, all: !all}
    }
    return {...state, nonStop: !nonStop}
  case ONETRANSPLANTS:
    if (all === true && nonStop === true && oneTransplants === true && twoTransplants === true && threeTransplants === true) {
      return {...state, oneTransplants: !oneTransplants, all: !all}
    }
    if (oneTransplants === false && twoTransplants === true && threeTransplants === true &&  nonStop === true && all === false)  {
      return {...state, oneTransplants: !oneTransplants, all: !all}
    }
    return {...state, oneTransplants: !oneTransplants}
  case TWOTRANSPLANTS:
    if (all === true && nonStop === true && oneTransplants === true && twoTransplants === true && threeTransplants === true) {
      return {...state, twoTransplants: !twoTransplants, all: !all}
    }
    if (oneTransplants === true && twoTransplants === false && threeTransplants === true &&  nonStop === true && all === false)  {
      return {...state, twoTransplants: !twoTransplants, all: !all}
    }
    return {...state, twoTransplants: !twoTransplants}
  case THREETRANSPLANTS:
    if (all === true && nonStop === true && oneTransplants === true && twoTransplants === true && threeTransplants === true) {
      return {...state, threeTransplants: !threeTransplants, all: !all}
    }
    if (oneTransplants === true && twoTransplants === true && threeTransplants === false &&  nonStop === true && all === false)  {
      return {...state, threeTransplants: !threeTransplants, all: !all}
    }
    return {...state, threeTransplants: !threeTransplants}       
  default:
    return state;
  }
}