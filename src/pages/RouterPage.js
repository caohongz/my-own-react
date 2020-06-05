import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "../kreact-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";
import _404Page from "./_404Page";
import PrivateRoute from "./PrivateRoute";

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h1>RouterPage</h1>

        <Router>
          <nav>
            <Link to="/">首页</Link>
            <Link to="/user">用户中心</Link>
            <Link to="/login">登录</Link>
            <Link to="/product/123">产品</Link>
          </nav>
          {/* <Switch> */}
          <Route exact path="/" component={HomePage} />
          {/* <PrivateRoute path="/user" component={UserPage} /> */}

          {/* <Route path="/login" component={LoginPage} /> */}
          {/* <Route path="/product/:id" component={ProductPage} /> */}
          <Route component={_404Page} />

          {/* </Switch> */}
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
