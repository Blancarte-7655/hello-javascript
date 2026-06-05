
// 1. Crea una variable para cada operación aritmética

let a = 7;
let b = 9;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo:", a % b);
console.log("Exponencial:", a ** b);
console.log("Incremento:", a++);
console.log("Decremento:", b--);
console.log(a);
console.log(b);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let myNumber = 10
console.log("numero inicial ", myNumber)

myNumber += 5
console.log("numero despues de suma ", myNumber)

myNumber -= 3
console.log("numero despues de resta ", myNumber)

myNumber *= 2
console.log("numero despues de multiplicacion ", myNumber)

myNumber /= 4
console.log("numero despues de division ", myNumber)

myNumber %= 3
console.log("numero despues de modulo ", myNumber)

myNumber **= 3
console.log("numero despues de exponencial ", myNumber)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log("Comparación 1: ", a < 17);
console.log("Comparación 2: ", a <= b);
console.log("Comparación 3: ", a != 7);
console.log("Comparación 4: ", a === a);
console.log("Comparación 5: ", a !== 7);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("Comparación 1: ", a > 17);
console.log("Comparación 2: ", a >= 37);
console.log("Comparación 3: ", a == 7);
console.log("Comparación 4: ", b === 9);
console.log("Comparación 5: ", a !== a);

// 5. Utiliza el operador lógico and

console.log("Comparación logica AND: a > 5 && b < 10 ", a > 5 && b < 10); // true

// 6. Utiliza el operador lógico or

console.log("Comparación logica OR: a > 17 || b < 10 ", a > 17 || b < 10); // true

// 7. Combina ambos operadores lógicos

console.log("Comparación logica AND/OR: (a > 5 && b < 10) || (a > 17 || b < 10) ", (a > 5 && b < 10) || (a > 17 || b < 10)); // true

// 8. Añade alguna negación

console.log("Negacion en comparación logica AND:  !(a > 5 && b < 10) ", !(a > 5 && b < 10));

// 9. Utiliza el operador ternario

const seAman = true
seAman ? console.log("rami y cesar se aman") : console.log("No se aman")

// 10. Combina operadores aritméticos, de comparáción y lógicas


console.log("-".repeat(80))
console.log("Encuentra el numero x, del 1 al 10")
console.log("-".repeat(80))

const personanumero = parseInt(prompt("Ingresa un numero del 1 al 10"))
console.log("Tu numero es: ", personanumero)

const numero = 7

const resultado = (personanumero > numero) ? "Un poco más bajo" : (personanumero < numero) ? "Un poco más alto" : "Encontrado"

console.log("-".repeat(80))
console.log(resultado)
console.log("-".repeat(80))

//----------------------------------------------------

