const notas = [1,2,3,4,5,6,7,8,9]

for( let x in notas){
    if(x == 5) {
        break // for while e switch
    }
    console.log(`${x} = ${notas[x]}`)
}

for (y in notas){
    if(y==5){
        continue //age em estruturas de repeticao
    }
    console.log(`${y} = ${notas[y]}`)

}

externo:
for (a in notas){
    for(b in notas){
        if(a ==2 && b==3) break externo
        console.log(`Par =  ${a}, ${b}`)
    }
}

console.log('Fim')