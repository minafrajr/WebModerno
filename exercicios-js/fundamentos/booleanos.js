let isAtivo = false;
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //!! duas negações passa a ser verdadeira

console.log('Verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![]) //array vazio
console.log({}) //objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!'' || null || 0 ||' ') //encontra o primeiro verdadeiro

let nome = 'Lucas'

console.log(nome || 'Desconhecido')