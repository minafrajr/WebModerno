let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 //pré-fixada tem precedencia de operação
console.log(num1)

//desafio V ou F?
console.log(++num1 === num2--)
console.log(num1 === num2)