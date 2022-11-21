import React from "react"
import { Title, SubTitle } from "./styles"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { AnimalService } from "../../Services/animalService";

const HomePage = () => {
  const navigate = useNavigate();
  const animalService = new AnimalService();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightBlue",
        padding: '25px',
        alignItems: "center"
      }}
    >
      <Title>
        Kariba Graph's
      </Title>
      <SubTitle>
        Grafos de uma cadeia alimentar baseado no jogo Kariba
      </SubTitle>

      <div
        style={{
          marginTop: "15rem",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button
          style={{
            margin: '1rem'
          }} variant="outline-primary"
          onClick={() => {
            navigate("/oasis")
            animalService.setAnimalsAndConnectionsLocalStorage()
          }}
        >
          Vamos começar!
        </Button>
      </div>

      <img alt="kariba" width="200px" height="auto" src={require('../../assets/pic6979262.png')} />


    </div>
  )
}

export {
  HomePage
}