import node from "./node.js";

const tree = (array) => {
  let arr = array;
  let root = node(arr);

  return {
    root,

    setLeft: (value) => {
      let nd = value;
      root.left = nd;
      return nd;
    },

    setRight: (value) => {
      let nd = value;
      root.right = nd;
      return nd;
    },
  };
};

export default tree;
