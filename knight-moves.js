import translate2DIntoNum from "./js/translate-coordinate-to-num.js";
import binarySearchTree from "./js/binary-search-tree.js";
import mergeSort from "./js/merge-sort.js";
import prettyPrint from "./js/pretty-print.js";

const createChessCoordinates = (
  frontLeftCoordinate = 7,
  frontRightCoordinate = 0
) => {
  const chessBoardCoordinates = [];

  let coordinate = [frontLeftCoordinate, frontRightCoordinate];

  if (frontLeftCoordinate === 0 && frontRightCoordinate === 7) {
    return [[0, 7]];
  }

  if (frontRightCoordinate !== 8) {
    frontRightCoordinate++;
  }

  if (frontRightCoordinate === 8) {
    frontRightCoordinate = 0;
    frontLeftCoordinate--;
  }

  return chessBoardCoordinates.concat(
    [coordinate],
    createChessCoordinates(frontLeftCoordinate, frontRightCoordinate)
  );
};

const getKnightMoves = (coordinate) => {
  let coor = coordinate;

  return [
    [coor[0] + 2, coor[1] - 1],
    [coor[0] + 2, coor[1] + 1],
    [coor[0] + 1, coor[1] + 2],
    [coor[0] + 1, coor[1] - 2],
    [coor[0] - 2, coor[1] - 1],
    [coor[0] - 2, coor[1] + 1],
    [coor[0] - 1, coor[1] - 2],
    [coor[0] - 1, coor[1] + 2],
  ];
};

const removeOverTheBoardMoves = (knightPossibleMoves) => {
  const moves = knightPossibleMoves;
  return moves.filter(
    (element) =>
      element.at(0) >= 0 &&
      element.at(0) <= 7 &&
      element.at(1) >= 0 &&
      element.at(1) <= 7
  );
};

const bst = binarySearchTree();

const translateAllCoordinatesToNumbers = (arrayOfCoordinates) => {
  let array = arrayOfCoordinates;
  return array.map((element) => translate2DIntoNum(element));
};

const createChessBoardGraphForKnight = () => {
  const chessCoordinates = createChessCoordinates();

  return chessCoordinates.map((element) => {
    let item = element;
    const knightMovements = getKnightMoves(item);
    const removeMoves = removeOverTheBoardMoves(knightMovements);
    const translateToNum = translateAllCoordinatesToNumbers(removeMoves);
    const sortMoves = mergeSort(translateToNum, 0, translateToNum.length - 1);
    item = bst.buildTree(sortMoves, 0, sortMoves.length - 1);
    return item;
  });
};

const graphChess = createChessBoardGraphForKnight();

const knightMoves = (from, to) => {
  // translate the from to num and to to num
};
