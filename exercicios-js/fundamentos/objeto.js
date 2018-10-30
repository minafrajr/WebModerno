const prod1 = {} //objeto é um conjunto de chave - valor
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.80
prod1['Desconto legal'] = 0.40

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
} //Isso não tem nada a ver com o JSON

'{"nome": "Camisa Polo","preco": 79.90}' // Isso é um JSON

console.log(prod2)
