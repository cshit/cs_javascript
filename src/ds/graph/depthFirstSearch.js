class Node {
  constructor(data){
    this.data = data;
    this.adjacencyList = [];
    this.visited = false;
    this.predecessor = null;
  }
}

class DepthFirstSearch {

  dfsIterative(startingNode) {
    let stack = [];
    startingNode.visited = true;
    stack.push(startingNode);

    while(stack.length !== 0) {
      let currentNode = stack.pop();
      console.log(currentNode.data);

      for(let n of currentNode.adjacencyList) {
        if(n.visited === false) {
          n.visited = true;
          stack.push(n);
        }
      }
    }
  }

  dfsRecursive(startingNode) {
    console.log(startingNode.data);

    for(let n of startingNode.adjacencyList) {
      if(n.visited === false) {
        startingNode.visited = true;
        this.dfsRecursive(n);
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

dfs_1 = new DepthFirstSearch();

// Tree structure
// dfs_1.dfsIterative(node1);
dfs_1.dfsRecursive(node1);

// Simple undirectional graph
// dfs_1.dfsIterative(node4);
