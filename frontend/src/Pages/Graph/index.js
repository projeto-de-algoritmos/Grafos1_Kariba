import React, { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from "react-router-dom"
import CytoscapeComponent from 'react-cytoscapejs';
import Cytoscape from 'cytoscape';
import { AnimalService } from "../../Services/animalService"
import { GraphService } from "../../Services/graphService";

const GraphView = () => {

  const [graph, setGraph] = useState(null);

  const animalService = new AnimalService();
  const graphService = new GraphService(30);

  useEffect(() => {
    const dados = [];

    const animals  = animalService.getAnimals();

    animals.forEach((a) => {
      dados.push(graphService.nodeSelector(a.name, a.name, a.image))
    })

    const connections = animalService.getAnimalsConnections();

    connections.forEach((c) => {
      // const animal = animalService.findAnimalByName(c.predator);
      dados.push(graphService.edgeSelector(c.predator, c.presa));

      graphService.addEdge(c.predator, c.presa);
    })

    setGraph(dados);
  })

  console.log(graph)

  const elements = [
    { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
    { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <CytoscapeComponent
        elements={graph}
        style={{ width: '600px', height: '600px' }}
        stylesheet={[
          {
            selector: "node",
            style: {
              width: 120,
              height: 120,
              shape: "circle",
            },
          },
          {
            selector: 'edge',
            style: {
              width: 5,
              "line-color": "black",
              "target-arrow-color": "black",
              "target-arrow-shape": "triangle",
              "curve-style": "bezier",
            }
          }
        ]}
      />
    </div>
  )
}

export {
  GraphView
}