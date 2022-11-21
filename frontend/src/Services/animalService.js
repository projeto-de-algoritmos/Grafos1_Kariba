import { animals, conections } from "../Utils/database/data";

export class AnimalService {

  getAnimals() {
    return animals;
  }

  findAnimalByName(name) {
    const index = animals.findIndex(animal => animal.name === name);

    if(index !== -1) {
      return animals[index];
    }

    return {};
  }

  getAnimalsConnections() {
    return conections;
  }

  addConnection(predador, presa) {
    const newConnection = {
      predator: predador,
      presa: presa
    }

    console.log(newConnection)

    conections.push(newConnection);
  }

  addNewAnimal(name, power, color) {
    const newAnimal = {
      name,
      power,
      color,
      image: null
    }

    // Conectar os animais na cadeia alimentar pelo poder delas.
    animals.forEach((animal) => {
      if(animal.power < newAnimal.power) {
        this.addConnection(newAnimal.name, animal.name);
      } else if(animal.power > newAnimal.power) {
        this.addConnection(animal.name, newAnimal.name);
      } else {
        this.addConnection(newAnimal.name, animal.name);
        this.addConnection(animal.name, newAnimal.name);
      }
    })

    animals.push(newAnimal);

    console.log(animals);

    // Se o poder do animal for maior ou igual a 8 o rato poderá assustar o novo animal.
    if(newAnimal.power >= 8) {
      this.addConnection("Rato", newAnimal.name);
    }

  }

}