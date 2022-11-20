export class GraphService {

  vertex;       // number of vertices in the graph
  matrixAdj = new Map(); // matrixAdjacent list

  constructor(vertex) {
    this.vertex = vertex;
    this.matrixAdj = new Map();
  }

  // configurar no para ser usado com a bibliteca cytoscape
  nodeSelector(id, label, image) {
    const node = {
      data: {
        id,
        label,
        image,
      },

      position: {
        x: Math.floor(Math.random() * 390),
        y: Math.floor(Math.random() * 390),
      }
    };

    return node;
  }

  edgeSelector(source, target) {
    const edge = {
      data: {
        source,
        target,
        label: `Edge from ${source} to ${target}`,
      }
    };

    return edge;
  }

  // Add a edge to the graph
  addEdge(v, w) {
    const values = this.matrixAdj.get(v) ?? [];
    this.matrixAdj.set(v, [...values, w]);
  }

  get graph() {
    return this.matrixAdj;
  }

}