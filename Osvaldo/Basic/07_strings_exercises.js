// 1. Concatena dos cadenas de texto

let titulo = "Cesar"

let live = "Hola, soy " + titulo + " sin chamba"

console.log(live)

// 2. Muestra la longitud de una cadena de texto

console.log(live.length)

// 3. Muestra el primer y último carácter de un string

console.log(live[0])
console.log(live[25])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(live.toUpperCase())
console.log(live.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let live2 = `y ocupo 
20k`

// 6. Interpola el valor de una variable en un string
console.log(`Hola, soy ${titulo} y ocupo 20k`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(live.replaceAll(" ", "-"))
// alternativa con regex: live.replace(/\s/g, "-")

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(live.includes("chamba"))   // true

// 9. Comprueba si dos strings son iguales
console.log(live === live2)            // false

// 10. Comprueba si dos strings tienen la misma longitud
console.log(live.length === live2.length)