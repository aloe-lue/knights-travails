const knightOffsets = [
  [2, -1],
  [2, 1],
  [1, 2],
  [1, -2],
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
];

const getKnightMoves = (coordinate, knightOffset) => {
  let [x, y] = coordinate;
  let arr = knightOffset;

  return arr
    .map(([a, b]) => [x + a, y + b])
    .filter(([c, d]) => c >= 0 && c < 8 && d >= 0 && d < 8);
};

const printOutcomes = (moves, path) => {
  console.log(`You made it in ${moves} moves, here's your path.`);
  for (let i = 0; i < path.length; i++) {
    console.log(path[i], "\t\t");
  }
};

// create a function that traverse the shortest path from the coordinate position to destination coordinate
// how do i do this now that i have change it's run time functions  and gonna have to change it because of the performance bottlenect
// how do i create a pseudocode that satisfies the requirement i have set for it to run so in this case would be O(n * log n)
// this would be the worst and best case scenario for what makes it interesting is that this is different but the limit would be that too not o(n^2)

const knightMoves = (source, destination) => {
  // declare the addition to include in it's auxillary running time
  const src = source;
  const dist = destination;

  // start by initializing some of the most important things to declare like since i want to use set to find the shortest path since it's easier to handle
  // let's say a set maybe yeah sure it's gon be set
  // that'll be like the things say -> minMoves = infinity and set and queue'
  let minMoves = Infinity;
  let visited = new Set();
  let queue = [];
  queue.push({ position: src, moves: 0, path: [src] });

  while (queue.length !== 0) {
    // since the first q value has been gotten with the use of position moves this is the reason why i want to use this is to print the outcomes and see
    // it's log values
    let { position, moves, path } = queue.shift();
    let [x, y] = position;

    // you want to check if the current position is the same as the destination coordination
    if (x === dist.at(0) && y === dist.at(1)) {
      if (moves < minMoves) {
        minMoves = moves;

        printOutcomes(moves, path);
        return minMoves;
      }
    }

    // check for all the possible values since i have used a separate function that i want to work with this might become hard since i have used to
    // upgrade it's made up sense before now it's my time to upgrade things
    for (let i = 0; i < getKnightMoves([x, y], knightOffsets).length; i++) {
      let [xM, yM] = getKnightMoves([x, y], knightOffsets).at(i);
      let newPosition = [xM, yM];
      // use condition to make it so the process item are indeeed not visited again make use of the set.has to check if
      // it includes the set that you want to traverse to
      // then also you want to make use of the queue again so push an object that contains a position moves and a path to go through

      if (!visited.has(`${xM}, ${yM}`)) {
        visited.add(`${xM}, ${yM}`);
        queue.push({
          position: newPosition,
          moves: moves + 1,
          path: path.concat([newPosition]),
        });
      }
    }
  }
  return minMoves !== Infinity ? minMoves : "No solution has been found";
};

export default knightMoves;
