const animals = [
  {
    name: "Rato",
    power: 1,
    color: 'pink',
    image: "https://img.icons8.com/color/512/mouse-animal.png"
  },
  {
    name: "Suricata",
    power: 2,
    color: 'red',
    image: "https://img.icons8.com/fluency/512/suricate-lunette.png"
  },
  {
    name: "Zebra",
    power: 3,
    color: 'orange',
    image: "https://img.icons8.com/external-tulpahn-flat-tulpahn/512/external-zebra-wild-animals-tulpahn-flat-tulpahn.png"
  },
  {
    name: "Girafa",
    power: 4,
    color: 'lightyellow',
    image: "https://img.icons8.com/external-tulpahn-flat-tulpahn/512/external-giraffe-wild-animals-tulpahn-flat-tulpahn.png"
  },
  {
    name: "Avestruz",
    power: 5,
    color: 'green',
    image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-ostrich-animal-flaticons-lineal-color-flat-icons-3.png"
  },
  {
    name: "Tigre",
    power: 6,
    color: 'lightblue',
    image: "https://img.icons8.com/external-justicon-flat-justicon/512/external-tiger-animal-justicon-flat-justicon.png"
  },
  {
    name: "Rinoceronte",
    power: 7,
    color: 'darkblue',
    image: "https://img.icons8.com/emoji/512/rhinoceros-emoji.png"
  },
  {
    name: "Elefante",
    power: 8,
    color: 'purple',
    image: "https://img.icons8.com/fluency/512/elephant.png"
  },
]

const conections = [
  { predator: 'Rato', presa: 'Elefante' },
  { predator: 'Suricata', presa: 'Rato' },
  { predator: 'Zebra', presa: 'Rato' },
  { predator: 'Zebra', presa: 'Suricata' },
  { predator: 'Girafa', presa: 'Rato' },
  { predator: 'Girafa', presa: 'Suricata' },
  { predator: 'Girafa', presa: 'Zebra' },
  { predator: 'Avestruz', presa: 'Rato' },
  { predator: 'Avestruz', presa: 'Suricata' },
  { predator: 'Avestruz', presa: 'Zebra' },
  { predator: 'Avestruz', presa: 'Girafa' },
  { predator: 'Tigre', presa: 'Rato' },
  { predator: 'Tigre', presa: 'Suricata' },
  { predator: 'Tigre', presa: 'Zebra' },
  { predator: 'Tigre', presa: 'Girafa' },
  { predator: 'Tigre', presa: 'Avestruz' },
  { predator: 'Rinoceronte', presa: 'Rato' },
  { predator: 'Rinoceronte', presa: 'Suricata' },
  { predator: 'Rinoceronte', presa: 'Zebra' },
  { predator: 'Rinoceronte', presa: 'Girafa' },
  { predator: 'Rinoceronte', presa: 'Avestruz' },
  { predator: 'Rinoceronte', presa: 'Tigre' },
  { predator: 'Elefante', presa: 'Rato' },
  { predator: 'Elefante', presa: 'Suricata' },
  { predator: 'Elefante', presa: 'Zebra' },
  { predator: 'Elefante', presa: 'Girafa' },
  { predator: 'Elefante', presa: 'Avestruz' },
  { predator: 'Elefante', presa: 'Tigre' },
  { predator: 'Elefante', presa: 'Rinoceronte' }
]

export {
  animals,
  conections
}