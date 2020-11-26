import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Axios from "axios";
import { signUp } from "../action/user";
import { connect } from "react-redux";
class SignUp extends React.Component {
  state = {
    modal: false,
    username: "",
    password: "",
    email: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addsignup = () => {
    let person = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      role:"user"
    };
    this.props.signUped(person);
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div>
        <Button color="warning" onClick={this.toggle}>
          Sign Up
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
         
              <input type="text" name="username"  onChange={this.handleChange} class="form-control" placeholder="enter your Name..." aria-label="Username" aria-describedby="basic-addon1"/>
              <input type="text" name="email"  onChange={this.handleChange} class="form-control" placeholder="enter your Email..." aria-label="Username" aria-describedby="basic-addon1"/>
              <input type="text" name="password"  onChange={this.handleChange} class="form-control" placeholder="enter your Password..." aria-label="Username" aria-describedby="basic-addon1"/>
            
           
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addsignup}>
              sign Up
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapdispatchtoprops = (dispatch) => ({
  signUped: (person) => dispatch(signUp(person)),
});

export default connect(null, mapdispatchtoprops)(SignUp);
