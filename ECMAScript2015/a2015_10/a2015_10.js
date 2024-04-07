console.log(`>> Symbol definizione base`)

let myS1 = Symbol('casa')
console.log(myS1)

let myS2 = Symbol('casa')

console.log(myS1 == myS2)

console.log(Symbol('casa') == Symbol('casa'))


console.log(`>> Symbol.for`)

let myS3 = Symbol.for('auto')
let myS4 = Symbol.for('auto')

console.log(myS3 == myS4) // true

let myS5 = Symbol('auto')

console.log(myS4 == myS5) // flase

console.log(Symbol.keyFor(myS4)) // auto
console.log(Symbol.keyFor(myS1)) // undefined

