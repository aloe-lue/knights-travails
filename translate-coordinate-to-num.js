/**
 * @pseudocode
 * todo: create a function that translate the coordinate into a number
 *  ? translate2dintoNum([7, 0]) === 0
 *  ? translate2dIntoNum([3, 3]) === 36
 */

const translate2DIntoNum = (coordinate) => {
  let frontCoordinate = [7, 0];
  let index = 0;
  const coor = coordinate;

  if (
    frontCoordinate.at(0) === coor.at(0) &&
    frontCoordinate.at(1) === coor.at(1)
  ) {
    return index;
  }

  for (let i = 1; i < 64; i++) {
    if (
      frontCoordinate.at(0) === coor.at(0) &&
      frontCoordinate.at(1) === coor.at(1)
    ) {
      index = i;
    }

    if (i % 8 === 0) {
      frontCoordinate[0]--;
    }

    if (frontCoordinate.at(1) !== 8) {
      frontCoordinate[1]++;
    }

    if (frontCoordinate.at(1) === 8) {
      frontCoordinate[1] = 0;
    }
  }

  return index;
};

export default translate2DIntoNum;
