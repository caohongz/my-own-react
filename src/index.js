// import React from "react";
// import ReactDOM from "react-dom";
import React from "./kreact/";
import ReactDOM from "./kreact/react-dom";
import Component from "./kreact/Component";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function FunctionComponent({ name }) {
  return (
    <div className="border">
      {name}
      <button
        onClick={() => {
          console.log("omg");
        }}
      >
        click
      </button>
    </div>
  );
}

class ClassComponent extends Component {
  render() {
    return (
      <div className="border">
        <p>{this.props.name}</p>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  msg: "我是defaultProps",
};
const jsx = (
  <div className="border">
    <p>全栈</p>
    <a href="https://www.kaikeba.com">开课吧</a>
    <FunctionComponent name="FunctionComponent" />
    <ClassComponent name="ClassComponent" />
    {/* <>
      <p>a</p>
      <p>b</p>
    </> */}
    {/* {[1, 2, 3].map((item) => {
      return (
        <div className="border" key={item}>
          <h1>text1</h1>
          <h2>text2</h2>
        </div>
      );
    })} */}
  </div>
);
ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
