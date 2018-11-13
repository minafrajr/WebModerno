//pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //congelando o objeto - não pode alterar mais nada

pessoa.nome = 'Maria'
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)