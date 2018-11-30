//nao aceita repeticao/nao indexada
const times = new Set()
times.add('Vasco')
times.add('Cruzeiro').add('Palmeiras').add('America')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)

console.log(nomesSet)