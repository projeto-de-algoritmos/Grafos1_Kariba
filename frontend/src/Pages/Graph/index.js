import React, { useEffect, useState } from "react"
import { AnimalService } from "../../Services/animalService"
import { GraphService } from "../../Services/graphService";

import { GraphComponent } from "../../Components/Graph";
import { InsertAnimalModal } from "../../Components/Modal";

const GraphView = () => {

  const [graph, setGraph] = useState(null);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    
    const animalService = new AnimalService();
    const graphService = new GraphService(1);
    const dados = [];
    const animals = animalService.getAnimals();

    animals.forEach((a) => {
      dados.push(graphService.nodeSelector(a.name, a.name, a.image, a.color))
    })

    console.log(dados)

    const connections = animalService.getAnimalsConnections();

    console.log(connections, "teste")

    console.log(graphService.graph())

    connections.forEach((c) => {
      dados.push(graphService.edgeSelector(c.predator, c.presa));

      graphService.addEdge(c.predator, c.presa);
    })

    setGraph(dados);
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