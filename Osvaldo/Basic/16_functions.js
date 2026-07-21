// funsiones 

//simple

function myFunc() {
    console.log('Hola, funcion')
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// con parametros

function myFuncWithParams(name) {
    console.log(`¡Hola ${name}!`)
}

console.log(myFuncWithParams("osvaldo"))
console.log(myFuncWithParams("Blancarte"))

// Funciones anónimas

const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Ovalde")

// Arrow functions

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("ovaldo")
myFunc4("ova")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope de la función

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach

myArray = [1, 2, 3, 4]

myset = new Set(['Manuel', 'Osvaldo', 'Montes', 'Blancarte', 17, true, "drum5677b@gmail.com"])

mymap = new Map([
    ['nombre', 'Manuel'],
    ['email', 'drumk5677b@gmail.com'],
    ['age', 17]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

myset.forEach((value) => console.log(value))

mymap.forEach((value) => console.log(value))