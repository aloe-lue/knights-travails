import binarySearchTree from "./binary-search-tree";
import getKnightMoves from "./get-knight-moves";
import mergeSort from "./merge-sort";
import removeOverTheBoardMoves from "./remove-over-the-board-moves";
import translateAllCoordinatesToNumbers from "./translate-all-coordinates-to-numbers";

const bst = binarySearchTree();

const chessBoardGraph = () => {
  const chessCoor = chessCoordinates();

  return chessCoor.map((element) => {
    let item = element;
    const knightMovements = getKnightMoves(item);
    const removeMoves = removeOverTheBoardMoves(knightMovements);
    const translateToNum = translateAllCoordinatesToNumbers(removeMoves);
    const sortMoves = mergeSort(translateToNum, 0, translateToNum.length - 1);
    item = bst.buildTree(sortMoves, 0, sortMoves.length - 1);
    return item;
  });
};

export default chessBoardGraph;
