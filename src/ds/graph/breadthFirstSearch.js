class Node {
  constructor(data){
    this.data = data;
    this.adjacencyList = [];
    this.visited = false;
    this.predecessor = null;
  }
}

class BreadthFirstSearch {
  bfs(startingNode){
    let queue = [];
    queue.unshift(startingNode);
    startingNode.visited = true;

    while(queue.length !== 0){
      let actualNode = queue.pop();
      console.log(actualNode.data);

      for(let n of actualNode.adjacencyList){
        if(n.visited == false){
          n.visited = true;
          queue.unshift(n);
        }
      }
    }
  }
}

node1 = new Node('A');
node2 = new Node('B');
node3 = new Node('C');
node4 = new Node('D');
node5 = new Node('E');
node6 = new Node('F');
node7 = new Node('G');


node1.adjacencyList.push(node2);
node1.adjacencyList.push(node3);
node1.adjacencyList.push(node4);
node2.adjacencyList.push(node5);
node2.adjacencyList.push(node6);
node4.adjacencyList.push(node7);
// node4.adjacencyList.push(node1);

bfs_1 = new BreadthFirstSearch();

// Tree structure
bfs_1.bfs(node1);

// Simple undirectional graph
// bfs_1.bfs(node4);
