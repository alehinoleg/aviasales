export const ALL = 'ALL';
export const NONSTOP = 'NONSTOP';
export const ONETRANSPLANTS = 'ONETRANSPLANTS';
export const TWOTRANSPLANTS = 'TWOTRANSPLANTS';
export const THREETRANSPLANTS = 'THREETRANSPLANTS';
export const ADD_TICKETS = 'ADD_TICKETS';
export const CHEAP = 'CHEAP';
export const QUICK = 'QUICK';
export const OPTIMAL = 'OPTIMAL';

export const all = () => ({type: ALL}); 
export const nonStop = () => ({type: NONSTOP});
export const oneTransplants = () => ({type: ONETRANSPLANTS});
export const twoTransplants = () => ({type: TWOTRANSPLANTS});
export const threeTransplants = () => ({type: THREETRANSPLANTS});
export const addTickets = (payload) => ({type: ADD_TICKETS, payload});
export const cheap = () => ({type: CHEAP});
export const quick = () => ({type: QUICK});
export const optimal = () => ({type: OPTIMAL});