class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor (mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    /*adiciona para o array da classe (lancamentos) os parâmetros passados para a função*/
    addLancamentos(...lancamentos){
        lancamentos.forEach( l=> this.lancamentos.push(l))  //push -> adiciona cada elemento do parametros para o array da classe
    }

    Sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário',48000)
const contaLuz = new Lancamento('Conta de luz',-300)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario, contaLuz)
console.log(contas.Sumario())