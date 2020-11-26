import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { login } from "../action/user";
import { connect } from "react-redux";
class SignIn extends React.Component {
  state = {
    modal: false,
    email: "",
    password: "",
    users: [],
  };


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

 
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
 
    return (
      <div>
        <Button color="warning" onClick={this.toggle}>
          Sign IN
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              placeholder="enter Your email"
            />
            <input
              type="text"
              name="password"
              onChange={this.handleChange}
              placeholder="enter your password"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary"  onClick={() => {
                this.props.login({

                  email: this.state.email,
                  password: this.state.password,
                });
              }}>
              Do Something
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
const mapstatetoprops = (state) => ({
  user: state.userstore,
});
;
const mapdispatch = (dispatch) => ({
  login: (el) => dispatch(login(el))
})

export default connect(mapstatetoprops,mapdispatch)(SignIn);
