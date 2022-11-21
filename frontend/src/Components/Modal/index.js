import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { AnimalService } from "../../Services/animalService";
import { StorageService } from "../../Services/storageService";

const InsertAnimalModal = ({flag, setFlag}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newAnimalData, setNewAnimalData] = useState({
    name: null,
    power: null,
    color: null,
    image: null
  })

  const handleNewAnimal = () => {
    const animalService = new AnimalService()

    if(animalService.getAnimals().findIndex((elem) => elem.name === newAnimalData.name) !== -1) {
      alert('Esse animal já está registrado na nossa savana! escolha outro nome por favor...');
      setNewAnimalData({ ...newAnimalData, name: null })
      return;
    }

    animalService.addNewAnimal(newAnimalData.name, newAnimalData.power, newAnimalData.color);
    setShow(false);
    setFlag(!flag)
    return;
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Adicionar um novo animal ao oasis
      </Button>
      {JSON.stringify(newAnimalData)}{flag ? "1" : "0"}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os campos para adicionar um novo animal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>
            Nome do animal:
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="jacaré"
            onChange={(e) => {
              setNewAnimalData({ ...newAnimalData, name: e.target.value })
            }}
          />
          <Form.Label>
            Poder do animal:
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="2 or more"
            onChange={(e) => {
              setNewAnimalData({ ...newAnimalData, power: e.target.value })
            }}
          />
          <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue="#563d7c"
            title="Choose your color"
            onChange={(e) => {
              setNewAnimalData({...newAnimalData, color: e.target.value})
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleNewAnimal()}}>
            Adicionar Animal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export {
  InsertAnimalModal
}