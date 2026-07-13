/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

myArray = ['eami', 'cesar', 'karim', 'kevin']

console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift('perez')
console.log(myArray)

myArray.push('dan')
console.log(myArray)


// 3. Elimina el que se encuentra en tercera posición

myArray.splice(4, 1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros

let myset = new Set(['almendra', 'tejido del cosmo', 'el gen egoista', 'lafundacion'])
console.log(myset)

// 5. Añade dos más. Uno de ellos repetido

myset.add('almendra')
myset.add('dracula')
console.log(myset)

// 6. Elimina uno concreto a tu elección

console.log(myset.delete('dracula'))
console.log(myset)

// 7. Crea un mapa que asocie el número del mes a su nombre

let mymap = new Map([
    [1, 'enero'],
    [2, 'febrero']
])

console.log(mymap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mymap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

mymap.set('meses de verano', 'junio julio agosto')
console.log(mymap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map


// 1) El Array — le pongo valores repetidos a propósito
const myarray777 = ["rojo", "azul", "azul", "verde", "rojo"];
console.log(myarray777)

// 2) Lo transformo a Set
const miSet = new Set(myarray777);
console.log(miSet)
// miSet ahora es: {"rojo", "azul", "verde"}  ← ¡adiós duplicados!

// 3) Lo almaceno en un Map
const miMap = new Map();
miMap.set("colores", miSet);
console.log(miMap)

// miMap ahora es: {"colores" => Set {"rojo", "azul", "verde"}}