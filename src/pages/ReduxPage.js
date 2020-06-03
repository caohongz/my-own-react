import React, { Component } from "react";
import { connect } from "../kreactredux/";
// import { bindActionCreators } from "redux";
import { bindActionCreators } from "../kreactredux/";

@connect(
  (state) => ({ count: state.home }),
  (dispatch) => {
    let creators = {
      add: () => ({ type: "ADD" }),
      minus: () => ({ type: "MINUS" }),
    };
    creators = bindActionCreators(creators, dispatch);
    return { dispatch, ...creators };
  }
  // {
  //   add: () => ({ type: "ADD" }),
  //   minus: () => ({ type: "MINUS" }),
  // }
)
class ReduxPage extends Component {
  dispatchAdd = () => {
    this.props.dispatch({ type: "ADD" });
    console.log(this.props.count);
  };
  render() {
    console.log("this.props", this.props);
    const { count, add, minus } = this.props;
    return (
      <div>
        <h3>ReduxPage</h3>
        <div>{count}</div>
        <button onClick={this.dispatchAdd}>dispatch add</button>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
      </div>
    );
  }
}
export default ReduxPage;
