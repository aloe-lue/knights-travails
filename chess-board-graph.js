const chessCoordinateRec = (coordinate = [7, 0]) => {
  let array = [];
  let [fNum, sNum] = coordinate;

  if (fNum === 0 && sNum === 7) {
    return [[fNum, sNum]];
  }
  if (sNum === 8) {
    sNum = 0;
    fNum--;
  }
  return array.concat(
    [[fNum, sNum++]],
    chessCoordinateRec((coordinate = [fNum, sNum]))
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

const findCoordinate = (index) => {
  let coordinates = chessCoordinateRec();

  let i = index;
  let coordinate = [];
  coordinates.forEach((element, eIndex) => {
    if (i === eIndex) {
      let [x, y] = element;
      coordinate[0] = x;
      coordinate[1] = y;
    }
  });

  return coordinate;
};

const findIndex = (array) => {
  let coordinates = chessCoordinateRec();

  let index = 0;
  coordinates.forEach((element, i) => {
    let [fNum, sNum] = array;
    let [fEl, sEl] = element;

    if (fNum === fEl && sNum === sEl) {
      index = i;
    }
  });

  return index;
};

const findArrIndexes = (arrayOfCoordinates) => {
  let arr = arrayOfCoordinates;
  return arr.map((element) => findIndex(element));
};

const chessBoardGraph = () => {
  const chessCoor = chessCoordinateRec();

  return chessCoor.map((element) => {
    let item = element;
    const knightMovements = getKnightMoves(item);
    const removeMoves = removeOverTheBoardMoves(knightMovements);
    const indexes = findArrIndexes(removeMoves);
    item = indexes;
    return item;
  });
};

export { chessBoardGraph, findIndex, findCoordinate };
