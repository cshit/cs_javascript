class Heap {
  constructor(){
    this.base = [];
  }

  push(node){
    this.base.push(node);
    this.base.sort(node.cmp);
  }

  pop(){
    return this.base.pop();
  }
}

class Edge {
  constructor(weight, startVertex, targetVertex){
    this.weight = weight;
    this.startVertex = startVertex;
    this.targetVertex = targetVertex;
  }
}

class Node {
  constructor(data){
    this.data = data;
    this.visited = false;
    this.predecessor = null;
    this.adjacenciesList = [];
    this.minDistance = Infinity;
  }

  cmp(){
    return (a, b) => b.minDistance - a.minDistance;
  }
}

class Algorithm {
  calculateShortestPath(vertexList, startVertex){
    let heap = new Heap();
    startVertex.minDistance = 0;
    heap.push(startVertex);

    while(heap.base.length !== 0) {
      let actualVertex = heap.pop();

      for(let edge of actualVertex.adjacenciesList) {
        let u = edge.startVertex;
        let v = edge.targetVertex;
        let newDistance = u.minDistance + edge.weight;

        // Here is were we discriminate...
        if(newDistance < v.minDistance) {
          v.predecessor = u;
          v.minDistance = newDistance;
          heap.push(v);
        }
      }
    }
  }

  getShortestPathTo(targetVertex){
    console.log(`This is the shortes path to ${targetVertex.data}`);

    let node = targetVertex;

    while(node !== null) {
      console.log(node.data);
      node = node.predecessor;
    }
  }
}


node1 = new Node("A");
node2 = new Node("B");
node3 = new Node("C");
node4 = new Node("D");
node5 = new Node("E");
node6 = new Node("F");
node7 = new Node("G");
node8 = new Node("H");

edge1 = new Edge(5,node1,node2);
edge2 = new Edge(8,node1,node8);
edge3 = new Edge(9,node1,node5);
edge4 = new Edge(15,node2,node4);
edge5 = new Edge(12,node2,node3);
edge6 = new Edge(4,node2,node8);
edge7 = new Edge(7,node8,node3);
edge8 = new Edge(6,node8,node6);
edge9 = new Edge(5,node5,node8);
edge10 = new Edge(4,node5,node6);
edge11 = new Edge(20,node5,node7);
edge12 = new Edge(1,node6,node3);
edge13 = new Edge(13,node6,node7);
edge14 = new Edge(3,node3,node4);
edge15 = new Edge(11,node3,node7);
edge16 = new Edge(9,node4,node7);

node1.adjacenciesList.push(edge1);
node1.adjacenciesList.push(edge2);
node1.adjacenciesList.push(edge3);
node2.adjacenciesList.push(edge4);
node2.adjacenciesList.push(edge5);
node2.adjacenciesList.push(edge6);
node8.adjacenciesList.push(edge7);
node8.adjacenciesList.push(edge8);
node5.adjacenciesList.push(edge9);
node5.adjacenciesList.push(edge10);
node5.adjacenciesList.push(edge11);
node6.adjacenciesList.push(edge12);
node6.adjacenciesList.push(edge13);
node3.adjacenciesList.push(edge14);
node3.adjacenciesList.push(edge15);
node4.adjacenciesList.push(edge16);

let vertexList = [node1, node2, node3, node4, node5, node6, node7, node8];

algorithm = new Algorithm();
algorithm.calculateShortestPath(vertexList, node1);
algorithm.getShortestPathTo(node7);
