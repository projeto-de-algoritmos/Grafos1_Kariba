import React, { useEffect, useState } from "react"
import { AnimalService } from "../../Services/animalService"
import { GraphService } from "../../Services/graphService";
import { StorageService } from "../../Services/storageService";

import { GraphComponent } from "../../Components/Graph";
import { InsertAnimalModal } from "../../Components/Modal";

const GraphView = () => {

  const [graph, setGraph] = useState(null);
  const [flag, setFlag] = useState(true);
  const [vertex, setVertex] = useState(null)

  useEffect(() => {
    
    const animalService = new AnimalService();
    const graphService = new GraphService(1);
    const storageService = new StorageService();
    const dados = [];
    const animals = animalService.getAnimals();

    animals.forEach((a) => {
      dados.push(graphService.nodeSelector(a.name, a.name, a.image, a.color))
    })

    const connections = animalService.getAnimalsConnections();

    connections.forEach((c) => {
      dados.push(graphService.edgeSelector(c.predator, c.presa));

      graphService.addEdge(c.predator, c.presa);
    })

    setGraph(dados);
    storageService.setData("@Grafo", dados)
    setVertex(graphService.bfs("Rato").length)
  }, [flag])


  return (
    graph ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <GraphComponent
          graph={graph}
        />
        {(vertex % 2 === 0) ? "é bipartido" : "não é bipartido"}
        <InsertAnimalModal
          flag={flag}
          setFlag={setFlag}
        />
      </div>
    ) : (<>Carregando...</>)
  )
}

export {
  GraphView
}