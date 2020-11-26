import axios from "axios";




import {
    ADD_ORDER_CLIENT,
    ALL_ORDERS,
    DELETE_ORDER,
  
  } from "./type";

export function allorders() {
    return (dispatch) => axios.get("http://localhost:8000/Resto/orders/").then((res) => dispatch(orders(res.data)));
  }
  

  
  export function deleteOrder(id) {
    return (dispatch) =>
      axios
        .delete(`http://localhost:8000/Resto/orders/${id}`)
        .then((res) => dispatch(deleteorder(id), window.location.reload()));
  }
  
  const deleteorder = (payload) => ({
    type: DELETE_ORDER,
    payload,
  });
  
  const orders = (payload) => ({
    type: ALL_ORDERS,
    payload,
  });
  
  export function addOrderToClient(el) {
    return (dispatch) =>
      axios
        .post("http://localhost:8000/Resto/orders/", el)
        .then((res) => dispatch(addOrderClient(el), window.location.reload()));
  }
  

const addOrderClient = (payload) => ({
    type: ADD_ORDER_CLIENT,
    payload,
  });

 
  
  export function confirmationAdmin(el) {
    return (dispatch) =>
      axios
        .put("http://localhost:8000/Resto/orders/" + el.id, el)
        .then((res) =>
          dispatch(confirmer(el, el.id), window.location.reload())
        );
  }

  const confirmer = (payload) => ({
    type: "UPDATE_PLATE_ADMIN",
    payload,
  });