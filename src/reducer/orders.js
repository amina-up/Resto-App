

const initState = [];
export const orderReducer = (state = initState, action) => {
  if (action.type === "ALL_ORDERS") {
    return action.payload
  } else return state;
};