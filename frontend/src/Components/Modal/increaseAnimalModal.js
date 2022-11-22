import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { AnimalService } from "../../Services/animalService";
import { GraphService } from "../../Services/graphService";
import { StorageService } from "../../Services/storageService";

const PopulateOasisModal = ({ graph }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [ligados, setLigados] = useState([]);
  const animals = localStorage.getItem("animals")

  const getLigados = (name) => {

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

    storageService.setData("@Grafo", dados)

    console.log(name)
    const assustados = graphService.bfs(String(name), graph);

    setLigados(assustados)
  }

  return animals && (
    <>
      <Button style={{ margin: "1rem"}} variant="primary" onClick={handleShow}>
        Ver quais animais assustam oque
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Veja o que cada animal assusta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select onChange={(e) => getLigados(e.target.value)}>
            <option>Open this select menu</option>
            <option value="Rato">Rato</option>
            <option value="Suricata">Suricata</option>
            <option value="Zebra">Zebra</option>
            <option value="Girafa">Girafa</option>
            <option value="Avestruz">Avestruz</option>
            <option value="Tigre">Tigre</option>
            <option value="Rinoceronte">Rinoceronte</option>
            <option value="Elefante">Elefante</option>
          </Form.Select>
          {ligados}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export {
  PopulateOasisModal
}