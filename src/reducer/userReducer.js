import { GET_PROFIL } from "../action/type";

const initState = [];
export const userReducer = (state = initState, action) => {
  if (action.type === "GET_PROFIL") {
    return action.payload
  } else return state;
};