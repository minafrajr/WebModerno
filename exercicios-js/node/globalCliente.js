require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!!!' //para evitar alterações no objeto global, usar o freeze
console.log(MinhaApp.nome) 