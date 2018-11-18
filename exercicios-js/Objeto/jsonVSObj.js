//JSON -> formato textual para transferência de dados

const obj = {a:1, b: 2, c: 3, soma(){return a + b + c}}

console.log(JSON.stringify(obj))//transforma o objeto em formato JSON

//console.log(JSON.parse("{ a:1 b: 2, c: 3}")) //atributos deve vir com aspas duplas
//console.log(JSON.parse("{ 'a':1 'b': 2, 'c': 3}")) //atributos deve vir com aspas duplas
console.log(JSON.parse('{ "a":1, "b": 2, "c": 3}')) //correto
console.log(JSON.parse('{"a": 1.78 , "b": "string", "c": true, "d": {}, "e":[] }')) //correto

const Pessoa = JSON.parse('{ "nome": "Carlos", "idade": 15 }')

console.log(Pessoa.nome)
console.log(Pessoa.idade)