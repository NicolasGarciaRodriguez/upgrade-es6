// 1. Arrows

// --------------------------1.1------------------------

// const suma = (a = 10, b = 5) => {
//     console.log(a + b)
// }

// suma()

// --------------------------1.2------------------------

// const suma = (a = 10, b = 5) => {
//     console.log(a + b)
// }

// suma(2)

// --------------------------1.3------------------------

// const suma = (a = 10, b = 5) => {
//     console.log(a + b)
// }

// suma(2, 8)



// 2. Destructuring

// --------------------------2.1------------------------

// const game = { title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020 }
// let { title, gender, year } = game
// console.log(title, gender, year)

// --------------------------2.2------------------------

// const fruits = ['Banana', 'Strawberry', 'Orange'];

// let fruit1 = fruits[0]
// let fruit2 = fruits[1]
// let fruit3 = fruits[2]

// console.log(fruit1, fruit2, fruit3)

// --------------------------2.3------------------------

// const animalFunction = () => {
//     return { name: 'Bengal Tiger', race: 'Tiger' }
// };

// let { name } = animalFunction()
// let { race } = animalFunction()

// console.log(name)
// console.log(race)

// --------------------------2.4------------------------

// const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }

// let { name, itv } = car

// let año1 = itv[0]
// let año2 = itv[1]
// let año3 = itv[2]

// console.log(name)
// console.log(itv)
// console.log(año1)
// console.log(año2)
// console.log(año3)


// 3. Spread operator

// --------------------------3.1------------------------

// const pointsList = [32, 54, 21, 64, 75, 43]
// const pointsListSpread = [...pointsList]
// console.log(pointsListSpread)

// --------------------------3.2------------------------

// const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
// const toySpread = {...toy }
// console.log(toySpread)

// --------------------------3.3------------------------

// const pointsList = [32, 54, 21, 64, 75, 43];
// const pointsLis2 = [54, 87, 99, 65, 32];
// const pointListSpread = [...pointsList, ...pointsLis2]
// console.log(pointListSpread)

// --------------------------3.4------------------------

// const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
// const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
// const toySpread = {...toy, ...toyUpdate }
// console.log(toySpread)

// --------------------------3.5------------------------


// 4. Map

// --------------------------4.1------------------------

// const users = [
//     { id: 1, name: 'Abel' },
//     { id: 2, name: 'Julia' },
//     { id: 3, name: 'Pedro' },
//     { id: 4, name: 'Amanda' }
// ];

// const usersName = users.map(person => {
//     console.log(person.name)
// })
// console.log(usersName)

// --------------------------4.2------------------------

// const users = [
//     { id: 1, name: 'Abel' },
//     { id: 2, name: 'Julia' },
//     { id: 3, name: 'Pedro' },
//     { id: 4, name: 'Amanda' }
// ];

// function crearLista(obj) {
//     obj.map(elem => {
//         if (elem.name.startsWith("A")) {
//             elem.name = "Anacleto"
//         }
//         console.log(elem.name)
//     })
// }

// crearLista(users)


// --------------------------4.3------------------------

// const cities = [
//     { isVisited: true, name: 'Tokyo' },
//     { isVisited: false, name: 'Madagascar' },
//     { isVisited: true, name: 'Amsterdam' },
//     { isVisited: false, name: 'Seul' }
// ];

// function crearLista(obj) {
//     obj.map(elem => {
//         if (elem.isVisited === true) {
//             elem.name = `${elem.name} Visited`
//         }
//         console.log(elem.name)
//     })
// }

// crearLista(cities)


// 5. Filter

// --------------------------5.1------------------------

// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
// const masDe18 = ages.filter(function(num) {
//     return num >= 18;
// })
// console.log(masDe18)

// --------------------------5.2------------------------

// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
// const agesPares = ages.filter(function(num) {
//     return num % 2 === 0;
// })
// console.log(agesPares)

// --------------------------5.3------------------------

// const streamers = [
//     { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
//     { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
//     { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
//     { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
// ];

// const streamersLOL = streamers.filter(function(streamer) {
//     return streamer.gameMorePlayed === "League of Legends"
// })
// console.log(streamersLOL)

// --------------------------5.4------------------------

// const streamers = [
//     { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
//     { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
//     { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
//     { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
// ];

// const newStreamers = streamers.filter(function(streamer) {
//     return streamer.name.includes("u")
// })
// console.log(newStreamers)

// --------------------------5.5------------------------

// const streamers = [
//     { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
//     { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
//     { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
//     { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
// ];

// const streamersLOL = []

// const haciendoFilter = streamers.filter(function(streamer) {
//     if (streamer.gameMorePlayed.includes("Legends")) {
//         streamersLOL.push(streamer)
//         if (streamer.age > 35) {
//             return streamer.gameMorePlayed.toUpperCase
//         }
//     }
// })

// console.log(streamersLOL)
// console.log(haciendoFilter)


// --------------------------5.6 y 5.7------------------------

// const streamers = [
//     { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
//     { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
//     { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
//     { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
// ];

// const searchButton = document.createElement("button")
// const searchButtonText = document.createTextNode("Search")
// document.body.appendChild(searchButton)
// searchButton.appendChild(searchButtonText)

// const input = document.querySelector("input")

// searchButton.onclick = function toFilterStreamers() {
//     const streamersFilter = streamers.filter(function(streamer) {
//         if (streamer.name.includes(input.value)) {
//             console.log(streamer.name)
//         }
//     })
// }


// 6. Find

// --------------------------6.1------------------------

// const numbers = [32, 21, 63, 95, 100, 67, 43];

// const found = numbers.find(num => num === 100)
// console.log(found)


// --------------------------6.2------------------------

// const movies = [
//     { title: 'Madagascar', stars: 4.5, date: 2015 },
//     { title: 'Origen', stars: 5, date: 2010 },
//     { title: 'Your Name', stars: 5, date: 2016 }
// ];
// const movieFind = movies.find(movie => movie.date === 2010)
// console.log(movieFind)

// --------------------------6.3------------------------

// const aliens = [
//     { name: 'Zalamero', planet: 'Eden', age: 4029 },
//     { name: 'Paktu', planet: 'Andromeda', age: 32 },
//     { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
// ];

// const mutations = [
//     { name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor' },
//     { name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna' },
//     { name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer' }
// ];

// const alienFind = aliens.find(alien => alien.name === "Cucushumushu")
// const mutationFind = mutations.find(mutation => mutation.name === "Porompompero")

// const newAlien = {...alienFind, mutation: mutationFind }

// console.log(newAlien)