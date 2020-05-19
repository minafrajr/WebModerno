/* function forEach2(arrayDados, tamanho){
    let indice = 0
    while (indice != tamanho){
        console.log(`${indice}) ${arrayDados[indice]}`)
        indice++
    }
} 
forEach2(aprovados, aprovados.length)
*/

Array.prototype.forEach2 = function(callback){
    for (let i = 0; i< this.length; i++){
        callback(this[i], i, this )
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome,indice, array){
    console.log(`${indice +1}) ${nome}`)
    console.log(array)
})
