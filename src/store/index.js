// import { createStore, combineReducers } from "redux";
import { createStore } from "../kredux/";

export const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};
const store = createStore(counterReducer);

export default store;
