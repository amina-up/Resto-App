import React from "react";
import Footer from "./footer";
import theimg from "./sea-food-logo.png";
import {logout} from "../action/user"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import AddPlate from "./add";
import EditePlate from "./edite";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {deleteProductFromAdmin, updatePlateFromAdmin, addPlateFromAdmin} from '../action/product'
import OrderAdmin from "./orderAdmin";
class Admin extends React.Component {
  state = {
    image: "",
    name: "",
    price: 0,
    newsrc: "",
    newtitle: "",
    newprice: 0,
    quantity: 1,
  };
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(e.target.name);
  };

  delete = (id) => {
   this.props.deleteProductFromAdmin(id)
  };
  addplate = () => {
    let menu = {
      name: this.state.name,
      image: this.state.image,
      price: this.state.price,
      
    };
    this.props.addPlateFromAdmin(menu)
  };
  updateplate = (el,_id) => {
  this.props.updatePlateFromAdmin(el,_id)
  };
  render() {
    return (
      <div className="home+navbar">
        <div className="navbar">
          <div className="logo">
            <img src={theimg} className="imgnavbar" />
          </div>
          <div className="maintitle">
            <p className="h1navbar">Sea Food Only</p>
          </div>
          <div className="buttons">
            <button className="reservation">Make a Reservation</button>
            <Link to="/"><Button color="warning" onClick={()=>this.props.logout()}>
              Sign out
            </Button></Link>
          </div>
        </div>
        <div>
          <AddPlate addplate={this.addplate} change={this.onChange} />
          <OrderAdmin/>
        </div>
        <div className="cards">
          {this.props.product.map((el) => (
            <Card className="card">
              <CardImg top width="100%" src={el.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{el.name}</CardTitle>
                <CardSubtitle>{el.price}dt</CardSubtitle>
                <EditePlate el={el} updateplate={this.updateplate} />
                <Button onClick={() => this.delete(el._id)}>Del</Button>
              </CardBody>
            </Card>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteProductFromAdmin : (id)=>dispatch(deleteProductFromAdmin(id)),
  updatePlateFromAdmin : (id,el) => dispatch(updatePlateFromAdmin(id,el)),
  addPlateFromAdmin : (menu) => dispatch (addPlateFromAdmin(menu)),
  logout:()=>dispatch(logout())
})

const mapstatetoprops = (state) => ({
  product: state.productstore,
});

export default connect(mapstatetoprops, mapDispatchToProps)(Admin);

