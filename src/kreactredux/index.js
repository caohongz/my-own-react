import React, { useContext, useReducer, useLayoutEffect } from "react";
const ReduxContext = React.createContext();

export const connect = (mapStateToProps, mapDispatchToProps) => (
  WrappedCompoent
) => (props) => {
  const store = useContext(ReduxContext);
  const { getState, dispatch, subscribe } = store;
  const stateProps = mapStateToProps(getState());
  console.log(mapStateToProps);

  let dispatchProps = { dispatch };
  if (typeof mapDispatchToProps === "function") {
    dispatchProps = mapDispatchToProps(dispatch);
  } else if (typeof mapDispatchToProps === "object") {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
  }
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  useLayoutEffect(() => {
    let unsubscribe = subscribe(() => {
      forceUpdate();
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [store]);
  return <WrappedCompoent {...props} {...stateProps} {...dispatchProps} />;
};

export function Provider({ store, children }) {
  return (
    <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
  );
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args));
}

export function bindActionCreators(creators, dispatch) {
  let obj = {};
  for (let key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch);
  }
  return obj;
}

export function useSelector(selector) {
  const store = useStore();
  const { getState, subscribe } = store;
  const selectedState = selector(getState());
  console.log("selectedState: " + selectedState);

  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate();
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [store]);
  return selectedState;
}
export function useDispatch() {
  const store = useStore();
  return store.dispatch;
}
export function useStore() {
  const store = useContext(ReduxContext);
  return store;
}
