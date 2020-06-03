import React, { useCallback } from "react";
import { useSelector, useDispatch } from "../kreactredux/";
// import { bindActionCreators } from "redux";
import { bindActionCreators } from "../kreactredux/";

export default function ReduxUsePage({ value }) {
  const dispatch = useDispatch();
  const add = useCallback(() => {
    dispatch({ type: "ADD" });
  }, []);
  const count = useSelector(({ state }) => state);
  return (
    <div>
      <h3>ReduxPage</h3>
      <div>{count}</div>
      <button onClick={add}>add</button>
    </div>
  );
}
