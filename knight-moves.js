import chessBoardGraph from "./js/chess-board-graph.js";
import prettyPrint from "./js/pretty-print.js";
import binarySearchTree from "./js/binary-search-tree.js";
import translate2DIntoNum from "./js/translate-coordinate-to-num.js";
import translateIndexToCoordinate from "./js/translate-num-to-coordinate.js";

const bst = binarySearchTree();

const createPath = (from, to) => {
  const chessGraph = chessBoardGraph();
  const current = translate2DIntoNum(from);
  const newCurr = translate2DIntoNum(to);

  const queue = [];
  const path = [];
  queue.push(current);

  while (queue.length !== 0) {
    let front = queue.at(0);
    let bstMoves = chessGraph.at(front);
    let movesArr = bst.inOrder(bstMoves);

    movesArr.forEach((element) => {
      let e = element;
      queue.push(e);
    });

    path.push({ position: front, moves: movesArr });

    if (bst.find(bstMoves, newCurr)) {
      return path;
    }

    queue.shift();
  }

};

console.log(createPath([0, 1], [0, 0]));
