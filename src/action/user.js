import Axios from "axios";


export function signUp(el) {
  return (dispatch) =>
    Axios.post("http://localhost:8000/Resto/auth/signUp", el, {
      withCredentials: true,
    })
      .then((rep) => {
      
        window.location.reload();
        // window.location.href = "/client";
      })
      .catch((err) => console.log(err));
}



export function login(Coords) {
  return (dispatch) =>
    Axios.post("http://localhost:8000/Resto/auth/signIn", Coords, {
      withCredentials: true,
    })
      .then((rep) => {
        window.location.reload();
      })
      .catch((err) =>  alert("mot de passe ou email invalide", "error"));
}





export function logout() {
  return () =>
    Axios.post(
      "http://localhost:8000/Resto/auth/logout",
      {},
      { withCredentials: true }
    )
      .then((rep) => {
        console.log(rep.data);
        if (rep.data === "ok") {
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
}


export const getprofil = () => async (dispatch) => {
  try {
    const res = await Axios.get(
      "http://localhost:8000/Resto/auth/getprofil",
      { withCredentials: true }
    );
    dispatch({
      type: "GET_PROFIL",
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};