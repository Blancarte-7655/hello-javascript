// Operadores 


// Aritméticos
let a = 5;
let b = 10;

console.log("Suma:", a + b);            // 15
console.log("Resta:", a - b);           // -5
console.log("Multiplicación:", a * b);  // 50
console.log("División:", a / b);        // 0.5
console.log("Módulo:", a % b);          // 5
console.log("Exponencial:", a ** b); // 25

// Incremento y decremento
a++; // Incremento (a = a + 1)
a--; // Decremento (b = b - 1)

console.log(a)
console.log(b)

// Asignación compuesta

let myVariable = 2
console.log(myVariable)

myVariable += 2
console.log(myVariable)

myVariable -= 2
console.log(myVariable)

myVariable *= 2
console.log(myVariable)

myVariable /= 2
console.log(myVariable)

myVariable %= 2
console.log(myVariable)

myVariable **= 2
console.log(myVariable)

// operadores de comparación

console.log("Igualdad:", a > b);
console.log("Desigualdad:", a < b);
console.log("Mayor o igual que:", a >= b);
console.log("Menor o igual que:", a <= b);
console.log("Igualdad estricta a == 6 :", a == 6); // iguadad por valor
console.log('Igualdad estricta: a == "6"', a == "6");
// Igualdad estricta: a == "6" true
console.log("Desigualdad estricta:", a == a);
console.log("Desigualdad estricta:", a === a); // igualdad estricta por valor y tipo de dato
console.log("Desigualdad estricta:", a === 6); // desigualdad estricta por valor
console.log("Desigualdad estricta:", a === "6"); // desigualdad estricta por tipo de dato
console.log("Desigualdad estricta: a != b", a != b);
//
console.log("Desigualdad estricta: a !== b", a !== b);// desigualdad estricta por valor y tipo de dato

console.log(0 == false) // true, porque 0 es falsy
console.log(1 == false) // false, porque 1 es un número y false es un booleano
console.log(2 == false) // false, porque 2 es un número y false es un booleano
console.log(0 == "") // true, porque "" es falsy
console.log(0 == '') // true, porque '' es falsy
console.log(0 == "Hola") // false, porque "Hola" es un string no vacío y 0 es falsy
console.log(0 == null) // false, porque null es falsy pero no es igual a 0
console.log(0 == undefined) // false, porque undefined es falsy pero no es igual a 0
console.log(false == "") // true, porque "" es falsy
console.log(undefined == null) // true, porque undefined y null son ambos falsy y se consideran iguales en comparación no estricta
console.log(undefined === null) // false, porque undefined y null son de tipos diferentes (undefined es un tipo de dato primitivo y null es un objeto)


// Truthy values (valores verdaderos)

// - Todos los numeros positivos y negativos menos el cero
// - Todas las cadenas de texto menos las vacías
// - El boolean true



//Falsy values (valores falsos)

// - 0
// -  0n
// - null
// - undefined
// - NaN (Not a Number)
// - El boolean false
// - Cadenas de texto vacías 

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = false
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")
