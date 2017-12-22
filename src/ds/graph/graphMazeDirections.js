MAX_VALUE = 1000;

class MazeBest {
  constructor(maze){
    this.counter = 0;
    this.maze = maze;
    this.directions = [];
    this.bestSolution = MAX_VALUE;
  }

  // Get the start location (x,y) and try to solve the maze
  solve(x, y){
    this.bestSolution = MAX_VALUE;

    if(this.step(x, y, 0) != MAX_VALUE) {
      return directions;
    }
  }

  step(x, y, count){
    console.log(this.maze);
    console.log(x,y);

    /** Reject case - when hit a wall or the path **/
    if (x < 0 || y < 0) {
      return MAX_VALUE;
    }

    /** Reject case - when hit a wall or the path **/
    if (this.maze[x][y] == 'X' || this.maze[x][y] == '*') {
      return MAX_VALUE;
    }
    /** Reject case - we already have a better solution! **/
    if (count === this.bestSolution) {
      return MAX_VALUE;
    }

    /** Accept case - we found the exit **/
    if (this.maze[x][y] == 'G') {
      this.bestSolution = count;
      return this.directions;
    }

    /** Backtracking Step **/

    // Mark this location as part of out path
    this.maze[x][y] = '*';
    let result     = MAX_VALUE;
    let new_result = MAX_VALUE;
    let direction  = null;

    // Try to go Right
    new_result = this.step(x, y+1, count+1);
    if (new_result < result) {
      result = new_result;
      direction = 'R';
    }

    // Try to go Up
    new_result = this.step(x-1, y, count+1);
    if (new_result < result) {
      result = new_result;
      direction = 'U';
    }

    // Try to go Left
    new_result = this.step(x, y-1, count+1);
    if (new_result < result) {
      result = new_result;
      direction = 'L';
    }

    // Try to go Down
    new_result = this.step(x+1, y, count+1);
    if (new_result < result) {
      result = new_result;
      direction = 'D';
    }

    // Unmark this location
    this.maze[x][y] = ' ';
    this.directions.push(direction);

    if (result < MAX_VALUE) {
      return result;
    }

    /** Deadend - this location can't be part of the solution **/

    // Go back
    return MAX_VALUE;
  }
}

sampleM= [
  ["O", "S", "X", "O"],
  ["O", "X", "O", "G"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"]
];

mazeBest = new MazeBest(sampleM);
mazeBest.solve(0,1);

//
//
//
//
//
// maze1 = {
//   start: [0,0],
//   goal: [0,1],
//   data: [
//     ["S", "G"]
//   ]
// };
//
// // expect ['R']
//
// maze2 = {
//   start: [0,0],
//   goal: [1,1],
//   data: [
//     ["S", "X"],
//     ["O", "G"]
//   ]
// }
//
// //expect ['D', 'R']
//
//
// maze3 = {
//   start: [0,1],
//   goal: [1,3],
//   data: [
//     ["O", "S", "X", "O"],
//     ["O", "X", "O", "G"],
//     ["O", "O", "O", "O"],
//     ["O", "O", "O", "O"]
//   ]
// }
//
// maze4 =  {
//   start: [0, 1],
//   goal: [1, 3],
//   data: [
//     ["O", "S", "X", "O"],
//     ["O", "X", "O", "G"],
//     ["O", "X", "O", "O"],
//     ["O", "X", "O", "O"]
//   ]
// }
//
// // expect null
//
// maze5 =  {
//   start: [2, 2],
//   goal: [8, 1],
//   data: [
//     ["O", "O", "O", "O", "O"],
//     ["O", "X", "O", "X", "O"],
//     ["O", "X", "S", "X", "O"],
//     ["O", "X", "X", "X", "O"],
//     ["X", "X", "O", "O", "O"],
//     ["O", "O", "O", "X", "O"],
//     ["O", "O", "O", "X", "O"],
//     ["O", "X", "O", "X", "O"],
//     ["O", "G", "X", "O", "O"],
//     ["O", "O", "X", "X", "O"]
//   ]
// }
//
//
// // U, D, L, R
//
// // S = start
// // G = goal
// // O = open
// // X = wall
