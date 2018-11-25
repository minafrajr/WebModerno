console.log(this === global) //F
console.log(this === module) //F

console.log(this === module.exports) //V
console.log(this === exports) //V

function logThis(){
    console.log('Dentro da função ...')
    console.log(this === exports) //F
    console.log(this === module.exports) //F
    console.log(this === global) //V
}

logThis()

/* O this dentro da função aponta para global, fora para module.exports
a implicação disso é que o this fora da função ficará público */