import chessBoardGraph from "./js/chess-board-graph.js";
import prettyPrint from "./js/pretty-print.js";
import binarySearchTree from "./js/binary-search-tree.js";
import translate2DIntoNum from "./js/translate-coordinate-to-num.js";
import translateIndexToCoordinate from "./js/translate-num-to-coordinate.js";

const bst = binarySearchTree();

const createPath = (from, to) => {
  const chessGraph = chessBoardGraph();
  let curr = translate2DIntoNum(from);
  let newLoc = translate2DIntoNum(to);

  let queue = [];
  queue.push(curr);
  let broadPath = [];

  while (queue.length !== 0) {
    let front = queue.at(0);

    let currSquare = chessGraph[front];
    let moves = bst.levelOrder(currSquare);
    let indexes = moves.map((element) => queue.push(element));

    broadPath.push({ position: queue.shift(), moves });

    if (front === newLoc) {
      return broadPath;
    }
  }
  return broadPath;
};

console.log(createPath([3, 3], [4, 3]), translate2DIntoNum([4, 3]));
