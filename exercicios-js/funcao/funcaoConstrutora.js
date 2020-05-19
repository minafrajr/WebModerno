function Carro(VelocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= VelocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = VelocidadeMaxima
        }
    }

    //metdodo privado
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}


const uno = new Carro
uno.acelerar
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(35,20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())

