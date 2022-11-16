import { allFunc, noTransferFunc, oneTransferFunc, twoTransferFunc, threeTransferFunc } from './action'

const defaultAvia = {
  all: false,
  noTransfer: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
}

const reduceAvia = (state = defaultAvia, action) => {
  if (action.type === allFunc) {
    if (state.all === false) {
      return {
        all: true,
        noTransfer: true,
        oneTransfer: true,
        twoTransfer: true,
        threeTransfer: true,
      }
    } else {
      return {
        all: false,
        noTransfer: false,
        oneTransfer: false,
        twoTransfer: false,
        threeTransfer: false,
      }
    }
  }

  if (action.type === noTransferFunc) {
    if (state.noTransfer === false && state.all === true) {
      return {
        ...state, all: false, noTransfer: true
      }
    } 
    if (state.noTransfer === false) {
      return {
        ...state, noTransfer: true
      }
    } else {
      return {
        ...state, noTransfer: false
      }
    }
  }

  if (action.type === oneTransferFunc) {
    if (state.oneTransfer === false) {
      return {
        ...state, oneTransfer: true
      }
    } else {
      return {
        ...state, oneTransfer: false
      }
    }
  }

  if (action.type === twoTransferFunc) {
    if (state.twoTransfer === false) {
      return {
        ...state, twoTransfer: true
      }
    } else {
      return {
        ...state, twoTransfer: false
      }
    }
  }

  if (action.type === threeTransferFunc) {
    if (state.threeTransfer === false) {
      return {
        ...state, threeTransfer: true
      }
    } else {
      return {
        ...state, threeTransfer: false
      }
    }
  }
  return state;
  /*switch (action.type) {
  case !allFunc : return {
    all: true,
    noTransfer: true,
    oneTransfer: true,
    twoTransfer: true,
    threeTransfer: true,
  }

  case allFunc : return {
    all: false,
    noTransfer: false,
    oneTransfer: false,
    twoTransfer: false,
    threeTransfer: false,
  }

  default: return state;
  }*/
}

export default reduceAvia;