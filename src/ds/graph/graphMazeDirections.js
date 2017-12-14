maze1 = {
  start: [0,0],
  goal: [0,1],
  data: [
    ["S", "G"]
  ]
}

// expect ['R']

maze2 = {
  start: [0,0],
  goal: [1,1],
  data: [
    ["S", "X"],
    ["O", "G"]
  ]
}

//expect ['D', 'R']


maze3 = {
  start: [0,1],
  goal: [1,3],
  data: [
    ["O", "S", "X", "O"],
    ["O", "X", "O", "G"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"]
  ]
}

maze4 =  {
  start: [0, 1],
  goal: [1, 3],
  data: [
    ["O", "S", "X", "O"],
    ["O", "X", "O", "G"],
    ["O", "X", "O", "O"],
    ["O", "X", "O", "O"]
  ]
}

// expect null

maze5 =  {
  start: [2, 2],
  goal: [8, 1],
  data: [
    ["O", "O", "O", "O", "O"],
    ["O", "X", "O", "X", "O"],
    ["O", "X", "S", "X", "O"],
    ["O", "X", "X", "X", "O"],
    ["X", "X", "O", "O", "O"],
    ["O", "O", "O", "X", "O"],
    ["O", "O", "O", "X", "O"],
    ["O", "X", "O", "X", "O"],
    ["O", "G", "X", "O", "O"],
    ["O", "O", "X", "X", "O"]
  ]
}


// U, D, L, R

// S = start
// G = goal
// O = open
// X = wall
