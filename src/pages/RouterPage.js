import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
// import ProductPage from "./ProductPage";

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h1>RouterPage</h1>
        <Router>
          <nav>
            <Link to="/">首页</Link>
            <Link to="/user">用户中心</Link>
            <Link to="/product/123">产品</Link>
          </nav>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/product/:id" component={ProductPage} />
        </Router>
      </div>
    );
  }
}

function ProductPage({ match }) {
  console.log("match", match);
  const { id } = match.params;
  return (
    <div>
      <h1>Product-{id}</h1>
      <Link to={match.url + "/detail"}>detail</Link>
      <Route path={match.url + "/detail"} component={Detail} />
    </div>
  );
}

function Detail() {
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}
