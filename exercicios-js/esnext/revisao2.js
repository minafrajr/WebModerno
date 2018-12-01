//Arrow Function -> sintaxe mais enxuta
const soma = (a, b) => a + b //retorno implícito
console.log(soma(2,3))

//Arrow Function (this)
const lexico1  = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
function log(texto = 'Node'){
    console.log(texto)
}
log()
log(null)
log(undefined)
log('Sou mais forte')

//operador rest
function total (...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total( 1,2,3,4))