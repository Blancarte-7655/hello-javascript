// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let Nombre = "Osvaldo"

if (Nombre == "Osvaldo") {
    console.log(Nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let Usuario = "Blancarte"
let Contraseña = "1234"

let key = Usuario + Contraseña

if (Usuario == "Blancarte" && Contraseña == "1234") {
    console.log("Acceso consedido")
} else {
    console.log("Usuario o contraseña incorrectas")
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let Num = (-10)

if (Num > 0) {
    console.log("El numero es positivo")
} else if (Num < 0) {
    console.log("El numero es negativo")
} else if (Num == 0) {
    console.log("El numero es 0")
} else {
    console.log("Intentalo de nuevo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 17

if (edad >= 18) {
    console.log("Puede votar")
} else if (edad < 18) {
    console.log("No puede votar, le faltan", 18 - edad, "años")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
const age = 27
const categoria = age >= 18 ? "Es mayor" : "Es menor"
console.log(categoria)


// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 10

if (mes === 12 || mes === 1 || mes === 2) {
    console.log("Invierno")
} else if (mes >= 3 && mes <= 5) {
    console.log("Primavera")
} else if (mes >= 6 && mes <= 8) {
    console.log("Verano")
} else if (mes >= 9 && mes <= 11) {
    console.log("Otoño")
} else {
    console.log("Mes no válido")
}

// switch
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let mes2 = 3
let dias

switch (mes2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dias = 31
        break
    case 4:
    case 6:
    case 9:
    case 11:
        dias = 30
        break
    case 2:
        dias = 28
        break
    default:
        dias = "Mes no válido"
}

console.log(`El mes ${mes2} tiene ${dias} días`)

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let saludo = "こんにちは"

switch (saludo) {
    case "こんにちは":
        console.log("元気ですか？")
        break
    case "Hola":
        console.log("¿Qué tal?")
        break
    case "Hello":
        console.log("How are you?")
        break
    default:
        console.log("Idioma no reconocido")
}

// 9. Usa un switch o if si se hizo con uno o otro para hacer de nuevo el ejercicio 6

let mes3 = 10
let estacion

switch (mes3) {
    case 12:
    case 1:
    case 2:
        estacion = "Invierno"
        break
    case 3:
    case 4:
    case 5:
        estacion = "Primavera"
        break
    case 6:
    case 7:
    case 8:
        estacion = "Verano"
        break
    case 9:
    case 10:
    case 11:
        estacion = "Otoño"
        break
    default:
        estacion = "Mes no válido"
}

console.log(estacion)

// 10. Usa un switch o if si se hizo con uno o otro para hacer de nuevo el ejercicio 7

let mes4 = 6
let dias2

if (mes4 === 1 || mes4 === 3 || mes4 === 5 || mes4 === 7 || mes4 === 8 || mes4 === 10 || mes4 === 12) {
    dias2 = 31
} else if (mes4 === 4 || mes4 === 6 || mes4 === 9 || mes4 === 11) {
    dias2 = 30
} else if (mes4 === 2) {
    dias2 = 28
} else {
    dias2 = "Mes no válido"
}

console.log(`El mes ${mes4} tiene ${dias2} días`)