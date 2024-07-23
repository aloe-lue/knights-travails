import chessCoordinates from "./chess-coordinates.js";

const translateIndexToCoordinate = (index) => {
  let i = index;
  let coordinate = [7, 0];
  const chessCoor = chessCoordinates();

  chessCoor.forEach((element, index) => {
    if (index === i) {
      let [first, second] = element;
      coordinate = [first, second];
      return coordinate;
    }
  });

  return coordinate;
};

export default translateIndexToCoordinate;
