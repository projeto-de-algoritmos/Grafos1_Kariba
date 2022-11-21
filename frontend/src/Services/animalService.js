import { animals, conections } from "../Utils/database/data";

export class AnimalService {

  setAnimalsAndConnectionsLocalStorage() {
    localStorage.setItem("animals", JSON.stringify(animals));
    localStorage.setItem("conections", JSON.stringify(conections))
  }

  getAnimals() {
    const animais = localStorage.getItem("animals") ?? animals;
    
    return JSON.parse(animais);
  }

  findAnimalByName(name) {
    const animais = this.getAnimals() ?? animals
    const index = animais.findIndex(animal => animal.name === name);

    if(index !== -1) {
      return animais[index];
    }

    return {};
  }

  getAnimalsConnections() {
    const conexoes = localStorage.getItem("conections") ?? conections

    return JSON.parse(conexoes);
  }

  addConnection(predador, presa) {
    const newConnection = {
      predator: predador,
      presa: presa
    }

    let conexoes = this.getAnimalsConnections()
    conexoes.push(newConnection)

    localStorage.setItem("conections", JSON.stringify(conexoes))
    // conections.push(newConnection);
  }

  addNewAnimal(name, power, color) {
    const newAnimal = {
      name,
      power,
      color,
      image: null
    }

    let animais = this.getAnimals();

    // Conectar os animais na cadeia alimentar pelo poder delas.
    animais.forEach((animal) => {
      if(animal.power < newAnimal.power) {
        this.addConnection(newAnimal.name, animal.name);
      } else if(animal.power > newAnimal.power) {
        this.addConnection(animal.name, newAnimal.name);
      } else {
        alert("Já existe um animal com esse poder.")
        return ;
      }
    })

    animais.push(newAnimal);
    localStorage.setItem("animals", JSON.stringify(animais))

    // Se o poder do animal for maior ou igual a 8 o rato poderá assustar o novo animal.
    if(newAnimal.power >= 8) {
      this.addConnection("Rato", newAnimal.name);
    }

  }

}