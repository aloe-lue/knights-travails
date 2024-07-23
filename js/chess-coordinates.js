const chessCoordinates = () => {
  let [front, end] = [7, 0];
  let coordinate = [];
  coordinate.push([front, end]);

  for (let i = 1; i < 64; i++) {
    end++;

    if (end === 8) {
      end = 0;
      front--;
    }
    coordinate[i] = [front, end];
  }
  return coordinate;
};

export default chessCoordinates;
