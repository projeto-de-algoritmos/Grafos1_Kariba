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
      predador: predador,
      presa: presa
    }

    conections.push(newConnection);
  }

  addNewAnimal(name, power, color) {
    const newAnimal = {
      name,
      power,
      color,
      image: name[0] // inicial do nome do animal
    }

    animals.push(newAnimal);

    // Conectar os animais na cadeia alimentar pelo poder delas.
    animals.forEach((animal) => {
      if(animal.power < newAnimal) {
        this.addConnection(newAnimal.name, animal.name);
      } else if(animal.power > newAnimal) {
        this.addConnection(animal.name, newAnimal.name);
      } else {
        this.addConnection(newAnimal.name, animal.name);
        this.addConnection(animal.name, newAnimal.name);
      }
    })

    // Se o poder do animal for maior ou igual a 8 o rato poderá assustar o novo animal.
    if(newAnimal.power >= 8) {
      this.addConnection("Rato", newAnimal.name);
    }

  }

}