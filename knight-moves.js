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

const removeOverTheBoardMove = (knightPossibleMoves) => {
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
  let squares = [];

  createChessCoordinates().forEach((element, index) => {
    let item = element;

    const knightMovements = getKnightMoves(item);
    const filteredKnightMovements = removeOverTheBoardMove(knightMovements);

    const arrayOfIndexesFilteredKnightMovements =
      translateAllCoordinatesToNumbers(filteredKnightMovements);

    const sortArrayOfIndexesFilteredKnightMovements = mergeSort(
      arrayOfIndexesFilteredKnightMovements,
      0,
      arrayOfIndexesFilteredKnightMovements.length - 1
    );

    squares[index] = bst.buildTree(
      sortArrayOfIndexesFilteredKnightMovements,
      0,
      sortArrayOfIndexesFilteredKnightMovements.length - 1
    );
  });

  return squares;
};

const knightMoves = (from, to) => {};

/**
 * decide what search algorithm to use, remember that
 * one of them could be potentially infinite series
 */
