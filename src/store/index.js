import { createStore } from "redux";
// import { createStore } from "../kredux/";

// export const counterReducer = (state = 0, { type }) => {
//   switch (type) {
//     case "ADD":
//       return state + 1;
//     case "MINUS":
//       return state - 1;
//     default:
//       return state;
//   }
// };
const userInit = {
  isLogin: false,
  username: "",
};

export const loginReducer = (state = { userInit }, { type }) => {
  switch (type) {
    case "LOGIN_SUCCESS":
      return { ...state, isLogin: true, username: "xiaobai" };
    default:
      return state;
  }
};
const store = createStore(loginReducer);

export default store;
