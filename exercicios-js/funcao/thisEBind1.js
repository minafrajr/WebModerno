const pessoa = {
    saudacao:'Bom dia!',
    falar(){ 
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //o this será resolvido para pessoa
// o bind é utilizado para definir o this
falarDePessoa()