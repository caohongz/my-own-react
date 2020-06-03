import React from "react";
// import ReduxPage from "./pages/ReduxPage";
import RouterPage from "./pages/RouterPage";
// import MyRCForm from "./pages/MyRCForm";

function App() {
  // const [num, setNum] = useState(1);
  return (
    // <div>
    //   <button
    //     onClick={() => {
    //       setNum(num + 1);
    //     }}
    //   >
    //     change num: {num}
    //   </button>
    //   {num % 2 && <ReduxPage />}
    // </div>
    <RouterPage />
  );
}
export default App;
// function f1(arg) {
//   console.log("f1" + arg);
//   return arg;
// }
// function f2(arg) {
//   console.log("f2" + arg);
//   return arg;
// }
// function f3(arg) {
//   console.log("f3" + arg);
//   return arg;
// }
// function compose(...funcs) {
//   if (funcs.length === 0) {
//     return (arg) => arg;
//   }
//   if (funcs.length === 1) {
//     return funcs[0];
//   }
//   return funcs.reduce((a, b) => (...args) => a(b(...args)));
// }
// let res = compose(f1, f2, f3)("omg");
// console.log("res:" + res);
