// -----------------------------------------------------------------------
// --                     Tipos de datos en JavaScript                  --
// -----------------------------------------------------------------------

// ---------------------------------------------------------
// ---              Tipos de datos primitivos             --
// ---------------------------------------------------------

// string (cadena de texto)
let myName = "Osvaldo"
let alias = 'OsvaDev'
let email = `b.drum7655@gmail.com`

// number (numeros)
let age = 17        // Entero
let height = 1.80   // Decimal

// boleans (booleanos)
let isTeacher = false
let isStudent = true

// undefined (indefinido), es un tipo de dato que se asigna a una variable que ha sido declarada pero no inicializada, lo que significa que no se le ha asignado ningún valor. También puede ser el resultado de una función que no devuelve ningún valor.
let undefinedValue
console.log(undefinedValue)

// null (nulo), representa la ausencia intencional de cualquier valor u objeto. Es un valor que se asigna a una variable para indicar que no tiene ningún valor o que su valor es desconocido. A diferencia de undefined, null es un valor asignado explícitamente por el programador, para despues ponerle un valor a la variable.
let nullValue = null

// symbol (símbolo), es un tipo de dato primitivo que se utiliza para crear identificadores únicos. Cada vez que se crea un símbolo, se garantiza que es único, incluso si se crean varios símbolos con la misma descripción.
let mySymbol = Symbol("mysymbol")
console.log(mySymbol)

// BigInt, es un tipo de dato primitivo que se utiliza para representar números enteros grandes que no pueden ser representados por el tipo de dato number. Un BigInt se puede crear utilizando la función BigInt() o agregando una "n" al final de un número entero.
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isTeacher)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)