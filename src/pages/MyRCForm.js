import React, { Component } from "react";
// import { createForm } from "rc-form";
import createForm from "../components/my-rc-form/";
import Input from "../components/Input";

const nameRules = { required: true, message: "请输入姓名!" };
const passwordRules = { required: true, message: "请输入密码!" };
@createForm
class MyRCForm extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.form.setFieldsValue({ username: "default" });
  }
  submit = () => {
    const { validateFields } = this.props.form;
    validateFields((err, val) => {
      if (err) {
        console.log("err", err);
      } else {
        console.log("校验成功", val);
      }
    });
  };
  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h3>MyRCForm</h3>
        {getFieldDecorator("username", { rules: [nameRules] })(
          <Input placeholder="Username" />
        )}
        {getFieldDecorator("password", { rules: [passwordRules] })(
          <Input placeholder="Password" />
        )}

        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}

export default MyRCForm;
