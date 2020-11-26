import { MENU, ALL_ORDERS } from "../action/type";
const menu = [];

export const productReducer = (state = menu, action) => {
  if (action.type === MENU) {
    return action.payload;
  } else return state;
};


