// array

// Declaraciones

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// inalizacion

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ['Manuel', 'Osvaldo', 'Montes', 'Blancarte', 17, true]
myArray2 = new Array('Manuel', 'Osvaldo', 'Montes', 'Blancarte', 17, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = 'Manuel Osvaldo'
myArray2[1] = 'Montes'
myArray2[2] = 'Blancarte'

// metodos comunes

myArray = []

// push y pop

myArray.push('Manuel')
myArray.push('Osvaldo')
myArray.push('Montes')
myArray.push('Blancarte')
myArray.push(17)

console.log(myArray)

console.log(myArray.pop())
myArray.pop()

console.log(myArray)

//

console.log(myArray.shift())
console.log(myArray)

myArray.unshift('Manuel', 'Osvaldo', 'Montes', 'Blancarte')
console.log(myArray)

//

console.log(myArray.length)

//

//myArray = []
myArray.length = 0
console.log(myArray)

// slice
myArray = ['Manuel', 'Osvaldo', 'Montes', 'Blancarte', 17, true]

let meyNewAray = myArray.slice(1, 2)

console.log(myArray)
console.log(meyNewAray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ['Manuel', 'Osvaldo', 'Montes', 'Blancarte', 17, true]

myArray.splice(1, 2, 'nuevo elemento', 'loco')
console.log(myArray)
F