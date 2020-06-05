import React, { Component } from "react";
import Router from "./Router";
import { createBrowserHistory } from "history";

export default class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    console.log("history", this.history);

    return <Router history={this.history}>{this.props.children}</Router>;
  }
}
