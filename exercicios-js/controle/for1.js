let contador = 1
while(contador<=10){
    console.log(`contador = ${contador}`)
    contador++
}
for(let  i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6,7.4,9.8,8.1,7.7]

for (let index = 0; index < notas.length; index++) {
    const element = notas[index];
    console.log(`nota = ${element}`)
}