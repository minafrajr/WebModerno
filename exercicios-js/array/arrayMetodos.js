const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //sai o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //inseri na primeira posição
console.log(pilotos)

pilotos.splice(2,0,'Bottas', 'Massa') //tanto insere quanto retira
console.log(pilotos)

//remover com splice
pilotos.splice(3,1) //retira o Massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //retorna um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //retorna um novo array
console.log(algunsPilotos2)
