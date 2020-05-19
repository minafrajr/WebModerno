//let e const
{
    var a = 2 // não tem escopo de bloco
    let b = 3 //escopo de bloco

    console.log(b) //tem acesso de bloco
}

console.log(a)
//console.log(b) //não tem acesso

//Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

//Destructing
const [l, e, ...tras] = "Cod3r"
console.log(l, e ,tras)

 const [x, , y] = [1, 2, 3]
 console.log(x, y)

 const { idade:i, nome} = {nome: 'Ana', idade: 9}
 console.log(i, nome)