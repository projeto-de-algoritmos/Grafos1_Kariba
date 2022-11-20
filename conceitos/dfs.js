class Graph{
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v)
    {
        this.AdjList.set(v, []);
    }

    addEdge(v, w){

        this.AdjList.get(v).push(w);
 

    }

    printGraph(){

        var get_keys = this.AdjList.keys();
    
        for (var i of get_keys){

            var get_values = this.AdjList.get(i);
            var conc = "";
    

            for (var j of get_values)
                conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }

 
    dfs(startingNode)
    {
    
        var visited = {};
    
        this.DFSUtil(startingNode, visited);
    }

    DFSUtil(vert, visited)
    {
        visited[vert] = true;
        console.log(vert);
    
        var get_neighbours = this.AdjList.get(vert);
    
        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }



}

   var g = new Graph(30);
   var vertices = [ 'Rato', 'Suricato', 'Zebra', 'Girafa', 'Avestruz', 'Tigre' , 'Rinoceronte' , 'Elefante'];
   
   for (var i = 0; i < vertices.length; i++) {
       g.addVertex(vertices[i]);
   }

   // adding edges
   g.addEdge('Rato', 'Elefante');
   g.addEdge('Suricato', 'Rato');
   g.addEdge('Zebra', 'Suricato');
   g.addEdge('Zebra', 'Rato');
   g.addEdge('Girafa', 'Zebra');
   g.addEdge('Girafa', 'Suricato');
   g.addEdge('Girafa', 'Rato');
   g.addEdge('Avestruz', 'Girafa');
   g.addEdge('Avestruz', 'Zebra');
   g.addEdge('Avestruz', 'Suricato');
   g.addEdge('Avestruz', 'Rato');
   g.addEdge('Tigre', 'Avestruz');
   g.addEdge('Tigre', 'Girafa');
   g.addEdge('Tigre', 'Zebra');
   g.addEdge('Tigre', 'Suricato');
   g.addEdge('Tigre', 'Rato');
   g.addEdge('Rinoceronte', 'Tigre');
   g.addEdge('Rinoceronte', 'Avestruz');
   g.addEdge('Rinoceronte', 'Girafa');
   g.addEdge('Rinoceronte', 'Zebra');
   g.addEdge('Rinoceronte', 'Suricato');
   g.addEdge('Rinoceronte', 'Rato');
   g.addEdge('Elefante','Rinoceronte');
   g.addEdge('Elefante', 'Tigre');
   g.addEdge('Elefante', 'Avestruz');
   g.addEdge('Elefante', 'Girafa');
   g.addEdge('Elefante', 'Zebra');
   g.addEdge('Elefante', 'Suricato');
   g.addEdge('Elefante', 'Rato');

   

   g.printGraph();
