import React, { Component } from "react";
import { RouterContext } from "./RouterContext";

export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };
    props.history.listen((location) => {
      this.setState({ location });
    });
  }

  render() {
    return (
      <RouterContext.Provider
        value={{
          location: this.state.location,
          history: this.props.history,
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
