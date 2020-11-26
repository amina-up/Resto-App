import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { allMenu } from "../action/product";
import { connect } from "react-redux";
import { getprofil } from "../action/user";
import {Redirect} from "react-router-dom"

import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class Home extends React.Component {
  state = {
    fillget: [],
  };
  componentDidMount() {
    this.props.allMenu();
    this.props.getprofil()
  }
  render() {

    if (this.props.profil.role) {
      return this.props.profil.role==="user" ? (
        <Redirect to="/client" />
      ) : this.props.profil.role==="admin" ?  <Redirect to="/admin" />:<Redirect to="/" />
      
    }
 
    return (
      <div>
        <Navbar />
        {console.log("map", this.props.fillget)}
        <div className="cards">
          {this.props.product.map((el) => (
            <Card className="card">
              <CardImg top width="100%" src={el.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{el.name}</CardTitle>
                <CardSubtitle>{el.price}dt</CardSubtitle>
              </CardBody>
            </Card>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
const mapstatetoprops = (state) => ({
  product: state.productstore,
  profil: state.userstore,
});


export default connect(mapstatetoprops, { allMenu,getprofil})(Home);
