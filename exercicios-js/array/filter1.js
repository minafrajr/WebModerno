const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199 , fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil:true},
    {nome: 'Copo de plastico', preco: 2.99, fragil:false}
]

console.log(produtos.filter(function(p){
    return false
}))

const frageis = p => p.fragil       //função arrow
const caros = p => p.preco >= 500   //função arrow

console.log(produtos.filter(frageis).filter(caros)) //callback na função filter