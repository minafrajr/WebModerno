const alunos =[
    {nome:'joão', nota:7.9},
    {nome:'Maria', nota:9.2},
]

//Imperativo - como se quer
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo  - o que se quer
const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 /alunos.length)

/*select codigo, nome, email from clientes where ativo =1
A query acima é declarativa pois especifica o se quer e não como deve ser feito */