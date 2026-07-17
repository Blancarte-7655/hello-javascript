// map

// declaracion

let mymap = new Map()

console.log(mymap)

// inaliciacion

mymap = new Map([
    ['nombre', 'Manuel'],
    ['email', 'drumk5677b@gmail.com'],
    ['age', 17]
])

console.log(mymap)

// metodos y propiedades

// set

mymap.set('alias', 'cartablanca')
mymap.set('nombre', 'cartablanca')


console.log(mymap)

// get 

console.log(mymap.get('nombre'))

// delete

mymap.delete('alias')

console.log(mymap)

// clear

mymap.clear()

console.log(mymap)
