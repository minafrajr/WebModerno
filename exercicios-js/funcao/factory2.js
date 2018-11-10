
function criarProduto(_nome, _preco, _desconto = 3.5){
    return{
        nome:_nome,
        preco: _preco,
        desconto: _desconto
    }
}

console.log(criarProduto('Notebook', 2199.49, 0.1))