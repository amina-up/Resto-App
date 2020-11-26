import { createStore, applyMiddleware } from "redux";
import {userReducer} from "./reducer/userReducer";
import {productReducer} from "./reducer/productReducer";
import{ orderReducer} from "./reducer/orders" 
import thunk from "redux-thunk";
import { combineReducers } from "redux";


const Reducers = combineReducers({
  userstore: userReducer,
  productstore: productReducer,
  ordersstore :orderReducer

});

const store = createStore(Reducers, applyMiddleware(thunk));
export default store;
