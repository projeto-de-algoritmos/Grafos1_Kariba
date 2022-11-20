import React, { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimalService } from "../../Services/animalService"
import { GraphService } from "../../Services/graphService";

import { GraphComponent } from "../../Components/Graph";
import { InsertAnimalModal } from "../../Components/Modal";

const GraphView = () => {

  const [graph, setGraph] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const animalService = new AnimalService();
    const graphService = new GraphService(30);
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
  }, [])

  const renderModal = () => {

    console.log(show)

    if (show === true) {
      return (
        <InsertAnimalModal
          setShow={(setShow())}
          show={show}
        />
      )
    }

    return null
  }

  return (
    graph ? (<div
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
      <Button
        variant="primary"
        onClick={() => { setShow(true) }}
      >
        Adicionar animal no oasis
      </Button>
      {renderModal}
    </div>) : (<>Carregando...</>)
  )
}

export {
  GraphView
}