import axios from "axios";
import { url } from "./url";
import {
  MENU,
  ALL_ORDERS,
  DELETE_ORDER,
 
  DELETE_PRODUCT_ADMIN,
  ADD_PRODUCT_ADMIN,
  UPDATE_PLATE_ADMIN,
  ADD_PLATE_ADMIN,
} from "./type";

export function allMenu() {
  return (dispatch) => axios.get(url).then((res) => dispatch(menu(res.data)));
}



/************************** CRUD ADMIN DASHBOARD ************* */
export function deleteProductFromAdmin(id) {
  return (dispatch) =>
    axios
      .delete(url + id)
      .then((res) =>
        dispatch(deleteProductAdmin(id), window.location.reload())
      );
}

export function updatePlateFromAdmin(el, id) {
  return (dispatch) =>
    axios
      .put(url + el.id, el)
      .then((res) =>
        dispatch(updatePlate(el, el.id), window.location.reload())
      );
}

export function addPlateFromAdmin(menu) {
  return (dispatch) =>
    axios
      .post(url, menu)
      .then((res) => dispatch(addPlateAdmin(menu)), window.location.reload());
}

// export function counterUp(el, id) {
//   return(dispatch)=>
//   axios
//     .patch(url + `/orders/${el.id}`, el)
//     .then((res) => dispatch(counterup(el, id)));
// }

// export function counterminus (){
//   return (dispatch) =>
//   axios
//       .put(`http://localhost:5000/orders/${el.id}`, count)
//       .then(this.setState({ count: count }));
// }

// const counterup = (payload) => ({
//   type: COUNTER_UP,
//   payload,
// });

const addPlateAdmin = (payload) => ({
  type: ADD_PLATE_ADMIN,
  payload,
});

const updatePlate = (payload) => ({
  type: UPDATE_PLATE_ADMIN,
  payload,
});

const addProductAdmin = (payload) => ({
  type: ADD_PRODUCT_ADMIN,
  payload,
});

const deleteProductAdmin = (payload) => ({
  type: DELETE_PRODUCT_ADMIN,
  payload,
});



const menu = (payload) => ({
  type: MENU,
  payload,
});
