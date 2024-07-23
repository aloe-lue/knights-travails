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

export default getKnightMoves;
