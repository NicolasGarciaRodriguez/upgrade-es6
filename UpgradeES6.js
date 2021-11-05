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