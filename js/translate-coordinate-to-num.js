import chessCoordinates from "./chess-coordinates.js";

const translate2DIntoNum = (coordinate) => {
  let chessCoor = chessCoordinates();
  let [front, end] = coordinate;
  let num = 0;

  chessCoor.forEach((element, index) => {
    let [first, second] = element;

    if (first === front && end === second) {
      num = index;
      return num;
    }
  });

  return num;
};

export default translate2DIntoNum;
