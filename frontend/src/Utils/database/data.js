const animals = [
  {
    name: "Rato",
    power: 1,
    color: 'gray',
    image: "https://thumbs.dreamstime.com/b/rato-dos-desenhos-animados-assustado-31653948.jpg"
  },
  {
    name: "Suricato",
    power: 2,
    color: 'red',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5dMNk_XS9JwlST4IYgqLTdnuYV5BCfJYdA&usqp=CAU.jpeg"
  },
  {
    name: "Zebra",
    power: 3,
    color: 'orange',
    image: "https://i.pinimg.com/736x/e1/1a/07/e11a078094a7adc025fe6375abfac495.jpg"
  },
  {
    name: "Girafa",
    power: 4,
    color: 'yellow',
    image: "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-bonito-do-vetor-girafa-dos-desenhos-animados-isolada-no-backg-branco-131610083.jpg"
  },
  {
    name: "Avestruz",
    power: 5,
    color: 'green',
    image: "https://i.pinimg.com/736x/75/f6/2f/75f62f6a863f6d2a4d7b5e73af990152.jpg"
  },
  {
    name: "Tigre",
    power: 6,
    color: 'light-blue',
    image: "https://i.pinimg.com/736x/02/ac/54/02ac545f1edbd35ae10681bc6da9f12b.jpg"
  },
  {
    name: "Rinoceronte",
    power: 7,
    color: 'dark-blue',
    image: "https://png.pngtree.com/png-clipart/20201203/ourlarge/pngtree-cute-big-eyed-rhino-clipart-png-image_2481256.jpg"
  },
  {
    name: "Elefante",
    power: 8,
    color: 'purple',
    image: "https://i.pinimg.com/736x/f9/27/62/f92762e4057603502869654b1aeb0388.jpg"
  },
]

const conections = [
  { predator: 'Rato', presa: 'Elefante' },
  { predator: 'Suricato', presa: 'Rato' },
  { predator: 'Zebra', presa: 'Rato' },
  { predator: 'Zebra', presa: 'Suricato' },
  { predator: 'Girafa', presa: 'Rato' },
  { predator: 'Girafa', presa: 'Suricato' },
  { predator: 'Girafa', presa: 'Zebra' },
  { predator: 'Avestruz', presa: 'Rato' },
  { predator: 'Avestruz', presa: 'Suricato' },
  { predator: 'Avestruz', presa: 'Zebra' },
  { predator: 'Avestruz', presa: 'Girafa' },
  { predator: 'Tigre', presa: 'Rato' },
  { predator: 'Tigre', presa: 'Suricato' },
  { predator: 'Tigre', presa: 'Zebra' },
  { predator: 'Tigre', presa: 'Girafa' },
  { predator: 'Tigre', presa: 'Avestruz' },
  { predator: 'Rinoceronte', presa: 'Rato' },
  { predator: 'Rinoceronte', presa: 'Suricato' },
  { predator: 'Rinoceronte', presa: 'Zebra' },
  { predator: 'Rinoceronte', presa: 'Girafa' },
  { predator: 'Rinoceronte', presa: 'Avestruz' },
  { predator: 'Rinoceronte', presa: 'Tigre' },
  { predator: 'Elefante', presa: 'Rato' },
  { predator: 'Elefante', presa: 'Suricato' },
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