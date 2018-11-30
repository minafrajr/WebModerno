function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice)=>{
        //console.log(valor, indice)
        valor = isNaN(valor)? valor: `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
      //  console.log(partes, valor)
    })
    //console.log(resultado)
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)