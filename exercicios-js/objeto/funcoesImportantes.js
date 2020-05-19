const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//nomes dos campos (CHAVES)
console.log(Object.values(pessoa)) //valores dos campos
console.log(Object.entries(pessoa)) //chave e valor retorna um array

//para percorrer todo o array
Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]} : ${e[1]}`)
})
//ou assim atraves do destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const destino = { a:1}
const o1 = { b:1}
const o2 = { c:3,a:4}
const obj = Object.assign(destino, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
