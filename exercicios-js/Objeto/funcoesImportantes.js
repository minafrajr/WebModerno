const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//nomes dos campos
console.log(Object.values(pessoa)) //valores dos campos
console.log(Object.entries(pessoa)) //chave e valor
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})

Object.defineProperty()