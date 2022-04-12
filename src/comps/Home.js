import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import history from "../history";
import Navbar from "./Navbar";

export default class Home extends Component {
  render() {
    return (
      <div className="col-md-12">
        <Router history={history}>
          <Navbar />
          {/* signout={this.props.signout} */}
          {/* <Route path="/addUser" exact component={addUser} />   */}
        </Router>
      </div>
    );
  }
}
