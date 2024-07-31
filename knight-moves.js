import getKnightMoves from "./chess-board-graph.js";

/**
 * @pseudocode
 *   find the shortest path from source path to destination path coordinates using
 *   the chessboard created for knight moves
 *   using dijkstra's algorithm you can find the shortest path from source to the target
 *   destination path
 *
 * how do i do this?
 * declare a variable 'visited' that is equal to the set abstract typed
 */
const printOutcomes = (path, moves) => {
  const arr = path;
  const num = moves;

  console.log(`You made it in ${num} moves, here's your path.`);
  arr.forEach((element) => {
    console.log(findCoordinate(element), "\t\t");
  });
};

const knightMoves = (source, destination, graph) => {
  const src = findIndex(source);
  const dist = findIndex(destination);
  const cGraph = graph;

  // store the path for the indexes so when it's done this function is then try to convert the indexes into coordinate
  let indexPath = [];

  // you want to store the set to check the unvisited content
  let visited = new Set();
  let minMoves = Infinity;
  const queue = [];
  queue.push({ position: src, moves: 0, path: [src] });

  while (queue.length !== 0) {
    let { position, moves, path } = queue.shift();

    // this loops breaks if the position is the same as the
    if (position === dist) {
      if (moves < minMoves) {
        minMoves = moves;

        printOutcomes(path, moves);
        return minMoves;
      }
    }

    // iterate the current position of graph then iterate it's content
    for (let i = 0; i < cGraph[position].length; i++) {
      let element = cGraph[position][i];

      if (!visited.has(element)) {
        visited.add(element);
        queue.push({
          position: element,
          moves: moves + 1,
          path: path.concat(element),
        });
      }
    }
  }

  if (minMoves === Infinity) return "No solution has been found";

  return indexPath;
};

export default knightMoves;
