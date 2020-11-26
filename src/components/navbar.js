import React from "react";
import theimg from "./sea-food-logo.png";
import SignIn from "./Signin";
import SignUp from "./Signup";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={theimg} className="imgnavbar" />
        </div>
        <div className="maintitle">
          <p className="h1navbar">Sea Food Only</p>
        </div>
        <div className="buttons">
          <button className="reservation">Make a Reservation</button>
          <SignUp />
          <SignIn />
        </div>
      </div>
    );
  }
}
export default Navbar;
