const tecnologias = new Map()
    tecnologias.set('react', {framework: false})
    tecnologias.set('angular', {framework: true})

    console.log(tecnologias.react)
    console.log(tecnologias.get('react'))
    console.log(tecnologias.get('react').framework)
    console.log(tecnologias.get('angular').framework) //aqui acessa o objeto


tecnologias.forEach((valor,chave) => {
    console.log(chave, valor)
    });

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{},'Objeto'],
    [123,'Número']
])

chavesVariadas.forEach((vl,ch)=>{
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))
console.log(chavesVariadas.delete(123)) //retorna true se deletar
console.log(chavesVariadas.has(123))

chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b')
console.log(chavesVariadas)
