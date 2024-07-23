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

export default removeOverTheBoardMoves;
