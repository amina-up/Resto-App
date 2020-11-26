import React from "react";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { allorders, deleteOrder} from "../action/order";
import {getprofil} from "../action/user"
import { connect } from "react-redux";

class ModalOrders extends React.Component {
  state = {
    ordersmodal: [],
    count: 0,
  };

  delete = (id) => {
    this.props.deleteOrder(id);
  };
  componentDidMount(){
    this.props.getprofil()
    this.props.getOrders()
  }

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    const ordersuser = this.props.orders.filter(
      (el) => el.user.toString() === this.props.profil._id.toString()
    );
 
    return (
      <div className="ModalOrders">
        <Button color="danger" onClick={this.toggle}>
          All My Orders
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Your Orders are : </ModalHeader>
          <ModalBody className="modalscard">
            {ordersuser.map((el) => (
              <Card className="card">
                <CardImg top width="50%" src={el.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{el.name}</CardTitle>
                  <CardSubtitle>{el.price}dt</CardSubtitle>
             
                  <p>{el.quantity} </p>
                  <p>{el.validation}</p>
                </CardBody>
              </Card>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Pass the command
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
/*
const mapstatetoprops = (state) => ({
  product: state.ordersstore,
});
*/
const mapdisptchtopropos = (disptch) => ({

  deleteOrder: (id) => disptch(deleteOrder(id)),
  getprofil:()=>disptch(getprofil()),
  getOrders:()=>disptch(allorders()),

});
export default connect(
  (state) => ({
  
    profil:state. userstore,
    orders:state.ordersstore
  }),
  mapdisptchtopropos
)(ModalOrders);
