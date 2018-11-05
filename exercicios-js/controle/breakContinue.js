const notas = [1,2,3,4,5,6,7,8,9]

for( let x in notas){
    if(x == 5) {
        break
    }
    console.log(`${x} = ${notas[x]}`)
}