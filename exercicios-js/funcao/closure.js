//Closure é escopo criado quando uma função é declarada
//Esse escopo permite a funão acessar e manipular variáves esternas à função

// Contexto léxido em ação!

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())