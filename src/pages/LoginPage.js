import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default connect(({ isLogin }) => ({ isLogin }), {
  login: () => ({ type: "LOGIN_SUCCESS" }),
})(
  class LoginPage extends Component {
    render() {
      const { isLogin, location, login } = this.props;
      const { redirect = "/" } = location.state || {};
      console.log("isLogin:", isLogin);

      if (isLogin) {
        return <Redirect to={redirect} />;
      }
      return (
        <div>
          <h3>LoginPage</h3>
          <button onClick={login}>click login</button>
        </div>
      );
    }
  }
);
