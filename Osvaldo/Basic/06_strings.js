// Strings (cadenas de texto)

// Concatenación

let myName = "Brais"
let greeting = "Hola, " + myName + "!" +
    console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])

// Métodos comunes
console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Brais")) // Índice 
console.log(greeting.indexOf("MoureDev"))
console.log(greeting.includes("Hola")) // Incluye en el codigo
console.log(greeting.includes("Brais")) // Incluye en el codigo
console.log(greeting.includes("MoureDev"))
console.log(greeting.slice(2, 10)) // sección del string 
console.log(greeting.replace("Brais", "MoureDev")) // Reemplazo de texto

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este es mi
curso de JavaScript`

console.log(message)

let email = "b.drum5677@gmail.com"

console.log(`Hola, ${myName}! Tu
email es ${email} . ${5 + 5}`)
