//Função sem retorno
function imprimirsoma(a,b){
    console.log(a+b)
}

imprimirsoma(2,3) 
imprimirsoma(2) //NaN
imprimirsoma(2,5,6,8,9,2) //fará a soma e descarta os outros parametros
imprimirsoma() //NaN

//Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2)) //faz a soma pois b = 0
console.log(soma()) //NaN