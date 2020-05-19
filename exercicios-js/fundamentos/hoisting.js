//Hoisting -> içar
console.log('a = ', a)
var a = 2
console.log('a = ', a)

/* É como se o interpretador fizesse isso:
var a
console.log('a = ', a)
a = 2
console.log('a = ', a) */

function teste(){
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)   
}
teste()
console.log('a = ', a)   

/*
Não ocorre hoisting com let
console.log('a = ', b)
let b = 2
console.log('a = ', b)
saída: b is not defined
*/