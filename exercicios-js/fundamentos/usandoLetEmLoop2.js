const funcs = []

for(let i = 0; i < 10; i++){
   funcs.push(function (){
       console.log(i)
   })
}

funcs[2]()
funcs[8]()//imprimi o valor da variavel i no momento
/*let tem memória para armazenar
A função tem consciencia do local onde ela foi criada*/ 