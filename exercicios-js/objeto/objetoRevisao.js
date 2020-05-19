//coleção dinamica de pares chave valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua AAAAAAAV',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    },
    {
        nome: 'Ana',
        idade: 46

       }],
       calcularValorSerguro: function(){

       }
}

carro.proprietario.endereco.numero = 10000
carro['proprietario']['endereco']['logradouro'] = 'Avenida gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSerguro
console.log(carro)
console.log(carro.condutores) //retorna undefined
console.log(carro.condutores.length) //aqui dá erro
