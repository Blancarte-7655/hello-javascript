// var
// var es una forma antigua de declarar variables en JavaScript. Aunque todavía se puede usar, se recomienda utilizar let o const en su lugar debido a problemas de alcance y hoisting asociados con var.

var helloWord = "Hola Mundo"; // puedes cambiarla después
console.log(helloWord)

helloWord = "Hola JavaScript"; // reasignación de valor
console.log(helloWord)

// let
// la diferencia con var es que let tiene un alcance de bloque, mientras que var tiene un alcance de función. Esto significa que las variables declaradas con let solo son accesibles dentro del bloque en el que se declaran, mientras que las variables declaradas con var son accesibles en toda la función en la que se declaran.

let helloWord2 = "Hola Mundo2"; // puedes cambiarla después
console.log(helloWord2)

helloWord2 = "Hola JavaScript2"; // reasignación de valor
console.log(helloWord2)

// const
// las variables declaradas con const no pueden ser reasignadas después de su declaración. Esto significa que una vez que se le asigna un valor a una variable const, ese valor no puede ser cambiado. Sin embargo, si el valor es un objeto o un array, sus propiedades o elementos sí pueden ser modificados.

const helloWord3 = "Hola Mundo3"; // no puedes cambiarla después
console.log(helloWord3)

// helloWord3 = "Hola JavaScript3"; // Esto causará un error porque no se puede reasignar una variable const


