import React from "react";
import Footer from "./footer";
import theimg from "./sea-food-logo.png";
import { Link } from "react-router-dom";
import { addOrderToClient } from "../action/order";
import {getprofil,logout} from "../action/user"
import {allorders} from "../action/order"
import {Redirect} from "react-router-dom"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import ModalOrders from "./Orders";
class Client extends React.Component {
  state = {
    orders: [],
    el: "",
  };

  componentDidMount(){
    this.props.getprofil()
    this.props.getOrders()
  }

  addOrderClient = (el) => {
    this.props.addOrderToClient(el);
  };
  render() {
   

    return (
      <div>
        <div className="navbar">
          <div className="logo">
            <img src={theimg} className="imgnavbar" />
          </div>
          <div className="maintitle">
            <p className="h1navbar">Sea Food Only</p>
          </div>
          <div className="buttons">
            <button className="reservation">Make a Reservation</button>
            <Link to="/">
              <Button color="warning" onClick={() => this.props.logout()}>
                Sign out
              </Button>
            </Link>
          </div>
        </div>
        <div className="ModalOrdersbtn">
          <ModalOrders />
        </div>
        <div className="cards">
          {this.props. product.map((el) => (
            <Card className="card">
              <CardImg top width="100%" src={el.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{el.name}</CardTitle>
                <CardSubtitle>{el.price}dt</CardSubtitle>
                <Button color="warning" onClick={() => this.addOrderClient({name
:el.name,price
:el.price,image:el.image,
user:this.props.profil
})}>
                  Commander
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapdisptchtopropos = (disptch) => ({
  addOrderToClient: (el) => disptch(addOrderToClient(el)),
  getprofil:()=>disptch(getprofil()),
  getOrders:()=>disptch(allorders()),
  logout:()=>disptch(logout())
});

const mapstatetoprops = (state) => ({
  product: state.productstore,
  profil:state. userstore,
  orders:state.ordersstore

})
export default connect(mapstatetoprops, mapdisptchtopropos)(Client);
