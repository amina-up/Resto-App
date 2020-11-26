import React from "react";
import "./App.css";
import Admin from "./components/Admin";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Client from "./components/Client";
import Home from "./components/Home";
import { allMenu } from "./action/product"
import { connect } from "react-redux";

class App extends React.Component {
  state = {
    fillget: [],
  };

  componentDidMount() {
    this.props.allMenu();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/Admin"
              exact
              render={() => <Admin fillget={this.state.fillget} />}
            />
            <Route
              path="/Client"
              exact
              render={() => <Client fillget={this.state.fillget} />}
            />
            <Route
              path="/"
              exact
              render={() => <Home fillget={this.state.fillget} />}
            />
           
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapstatetoprops = (state) => ({
  product: state.productstore,
});

export default connect(mapstatetoprops, { allMenu })(App);