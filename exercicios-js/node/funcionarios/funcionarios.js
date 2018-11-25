const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //faz requisições http

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
}) //faz a requisição e então


//desafio: pegar do array a mulher chinesa com menor salário
//genero F 

const chineses = funcionario => funcionario.pais = 'China'
const mulher = funcionario => funcionario.genero = 'F'
const menorSalario = (funcAnterior, funcAtual) => {
    return funcAnterior.salario > funcAtual.salario ? funcAnterior : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios
                .filter(chineses)
                .filter(mulher)
                .reduce(menorSalario))

    //console.log(funcionarios)
}) //faz a requisicao e pega os funcionários

