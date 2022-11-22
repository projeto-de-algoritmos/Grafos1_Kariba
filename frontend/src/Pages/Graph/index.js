import React, { useEffect, useState } from "react"
import { AnimalService } from "../../Services/animalService"
import { GraphService } from "../../Services/graphService";
import { StorageService } from "../../Services/storageService";

import { GraphComponent } from "../../Components/Graph";
import { InsertAnimalModal } from "../../Components/Modal";
import { PopulateOasisModal } from "../../Components/Modal/increaseAnimalModal";

const GraphView = () => {

  const [graph, setGraph] = useState(null);
  const [flag, setFlag] = useState(true);

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
        <PopulateOasisModal
          animals={localStorage.getItem("animals")}
        />
      </div>
    ) : (<>Carregando...</>)
  )
}

export {
  GraphView
}