let valor //nao inicializada

console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString())

const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined (o melhor é null)
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

