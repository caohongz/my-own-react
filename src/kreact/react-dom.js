import { TEXT } from "./const";
function render(vnode, container) {
  console.log("vnode", vnode, container);
  const node = createNode(vnode, container);
  container.appendChild(node);
}

function createNode(vnode, parentNode) {
  let node = null;
  const { type, props } = vnode;
  // 暗号：乌拉圭
  if (typeof type.defaultProps === "object") {
    // 如果发现有defaultProps，则直接合并到Component的Props上
    Object.assign(props, type.defaultProps);
  }
  if (type === TEXT) {
    node = document.createTextNode("");
  } else if (typeof type === "string") {
    node = document.createElement(type);
  } else if (typeof type === "function") {
    node = type.isReactComponent
      ? updateClassComponent(vnode, parentNode)
      : updateFunctionComponent(vnode, parentNode);
  }
  reconcileChildren(props.children, node);
  updateNode(node, props);
  return node;
}

function updateClassComponent(vnode, parentNode) {
  const { type, props } = vnode;

  let cmp = new type(props);
  let vvnode = cmp.render();

  return createNode(vvnode, parentNode);
}

function updateFunctionComponent(vnode, parentNode) {
  const { type, props } = vnode;
  let vvnode = type(props);

  return createNode(vvnode, parentNode);
}

function updateNode(node, nextVal) {
  Object.keys(nextVal)
    .filter((k) => k !== "children")
    .forEach((k) => {
      if (k.slice(0, 2) === "on") {
        let eventName = k.slice(2).toLowerCase();

        node.addEventListener(eventName, nextVal[k]);
      } else {
        console.log("node", node);
        node[k] = nextVal[k];
      }
    });
}

function reconcileChildren(children, node) {
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    render(child, node);
  }
}

export default { render };
