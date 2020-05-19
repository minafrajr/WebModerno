function Pessoa(){
    this.idade = 0

    setInterval(function (){
        this.idade++
        console.log(this.idade)
    }.bind(this)
    , 1000)//dipara uma função em um intervalo de tempo
}

new Pessoa

//Alternativa para não usar o bind()
function Pessoa(){
    this.idade = 0
    const self = this

    setInterval(function (){
        self.idade++
        console.log(this.idade)
    }
    , 1000)//dipara uma função em um intervalo de tempo
}

new Pessoa