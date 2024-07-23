import translate2DIntoNum from "./translate-coordinate-to-num.js";

const translateAllCoordinatesToNumbers = (arrayOfCoordinates) => {
  let array = arrayOfCoordinates;
  return array.map((element) => translate2DIntoNum(element));
};

export default translateAllCoordinatesToNumbers;
