// loops o bucles

// for

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0
while (i < 5) {
    console.log(`Hola  ${i}`)
    i++
}

// do while
i = 6
do {
    console.log(`Hola  ${i}`)
    i++
} while (i < 5)

// for of

myArray = [1, 2, 3, 4]

myset = new Set(['Manuel', 'Osvaldo', 'Montes', 'Blancarte', 17, true, "drum5677b@gmail.com"])

mymap = new Map([
    ['nombre', 'Manuel'],
    ['email', 'drumk5677b@gmail.com'],
    ['age', 17]
])

myString = "Manuel"


for (let valor of myArray) {
    console.log(valor)
}

for (let valor of myset) {
    console.log(valor)
}

for (let valor of mymap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// good practise

for (let i = 0; i < 10; i++) {
    if (1 == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`hola ${i}`)
}