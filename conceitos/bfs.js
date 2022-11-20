class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new ListNode(val);
    this.tail = this.head;
  }

  // Add no fim da lista
  add(val) {
    this.tail.next = new ListNode(val);
    this.tail = this.tail.next;
  }

}

const graph = {
  'A': ['F', 'B'], // 'A' has edges to F, B
  'B': ['D', 'C'], // 'A' has edges to D, C
  'D': ['E'] // 'D' has edge to 'E'
}

const bfs = (graph, start) => {
  let visited = []; // save a visited nodes 
  let needVisit = [];  // save a need-to-visit nodes

  needVisit.push(start);  // start search with start node

  // looping for need-to-visit list
  while (needVisit.length !== 0) {
    let node = needVisit.shift(); // take a nodes which in first position in array
    if (!visited.includes(node)) { // if this node is not visited,
      visited.push(node); // add to visited list (now visit)

      const tmp = (!graph[node] ? [] : graph[node])
      needVisit = [...needVisit, ...tmp]
      // bfs is breadth first, So, nodes(child nodes) connected to this node has lower priority than original nodes in need-to-visit list
    }
  }
  return visited.join(' ');
}

console.log(bfs(graph, 'A'))